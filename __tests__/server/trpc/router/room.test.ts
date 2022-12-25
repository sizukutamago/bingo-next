import { type inferProcedureInput } from "@trpc/server";
import { createContextInner } from "../../../../src/server/trpc/context";
import {
  appRouter,
  type AppRouter,
} from "../../../../src/server/trpc/router/_app";
import { expect, test } from "vitest";

test("room router", async () => {
  const ctx = await createContextInner({ session: null });
  const caller = appRouter.createCaller(ctx);

  type Input = inferProcedureInput<AppRouter["room"]["create"]>;
  const input: Input = {
    name: "test",
  };

  const example = await caller.room.create(input);

  expect(example.name).toMatch("test");
  expect(example.id).toBeTruthy();
});
