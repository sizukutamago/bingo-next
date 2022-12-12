import { type NextPage } from "next";
import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const createRoom = (name: string) => {
  const createRoom = trpc.room.create.useMutation();
  return createRoom.mutate({ name });
};

const Home: NextPage = () => {
  const [name, setName] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createRoom(name);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[white] to-[#a9ceec]">
      <form className="flex flex-col" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="ビンゴルームの名前"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            setName(event.target.value);
          }}
        />
        <button type="submit">ビンゴを始める</button>
      </form>
    </main>
  );
};

export default Home;
