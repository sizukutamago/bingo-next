import { type NextPage } from "next";
import { type MouseEvent } from "react";
import { useState } from "react";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import { type Room } from "@prisma/client";

const Home: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);
  const router = useRouter();

  const createRoom = trpc.room.create.useMutation({
    onSuccess: (room: Room) => {
      router.replace(`/room/${room.id}`);
    },
    onError: () => {
      setProcessing(false);
    },
  });

  const onClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();

    if (processing) {
      return;
    }

    setProcessing(true);
    createRoom.mutate({ name });
  };

  return (
    <Box h="100vh" width="100vw">
      <Flex h="100%" justify="center" align="center">
        <FormControl w="50%">
          <VStack spacing={18}>
            <Heading as="h1" size="2xl">
              Bingo Next
            </Heading>
            <Input
              type="text"
              placeholder="ビンゴルームの名前"
              name="name"
              value={name}
              bg="white"
              border="2px"
              width={{ base: "xs", md: "xl" }}
              borderColor="#919191"
              textAlign="center"
              onChange={(event) => {
                event.preventDefault();
                setName(event.target.value);
              }}
            />
            <Button
              type="submit"
              onClick={onClick}
              h="4rem"
              border="2px"
              borderColor="#919191"
            >
              ビンゴを始める
            </Button>
          </VStack>
        </FormControl>
      </Flex>
    </Box>
  );
};

export default Home;
