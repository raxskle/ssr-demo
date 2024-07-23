import type { Context } from "koa";

export const request = async (ctx: Context) => {
  return "index result";
};
