import { router } from "../trpc";
import { authRouter } from "./auth";
import { roomRouter } from "./room";

export const appRouter = router({
  room: roomRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
