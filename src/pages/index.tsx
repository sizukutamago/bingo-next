import { type NextPage } from "next";
import type { FormEvent } from "react";
import { useState } from "react";
import { trpc } from "../utils/trpc";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const createRoom = (name: string) => {
  const createRoom = trpc.room.create.useMutation();
  return createRoom.mutate({ name });
};

const Home: NextPage = () => {
  const [name, setName] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    createRoom(name);
  };

  return (
    <Box h="100vh" width="100vw">
      <Flex h="100%" justify="center" align="center">
        <FormControl w="50%" onSubmit={onSubmit}>
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
            <Button type="submit" h="4rem" border="2px" borderColor="#919191">
              ビンゴを始める
            </Button>
          </VStack>
        </FormControl>
      </Flex>
    </Box>
  );
};

export default Home;
