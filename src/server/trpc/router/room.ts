import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const roomRouter = router({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.room.create({
        data: {
          name: input.name,
        },
      });
    }),
});
