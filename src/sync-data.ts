import type { Context } from "koa";

export interface SyncData {
  msg: string;
}

export async function syncFunc(ctx: Context): Promise<SyncData> {
  const renderData = {
    msg: "Hello world! from server",
  };

  // do something here

  return renderData;
}
