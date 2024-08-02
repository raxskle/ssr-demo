import type { Context } from "koa";

export const handleRequest = async (ctx: Context) => {
  ctx.body = "index result";
};
