import { isDevelopment } from "./utils/index.js";
export const handleRequest = async (ctx) => {
    const { action } = ctx.params;
    // do something here
    const handlerPath = isDevelopment ? `./request/${action}.ts` : `./request/${action}.js`;
    const { request } = await import(handlerPath);
    const result = await request(ctx);
    ctx.body = result;
};
