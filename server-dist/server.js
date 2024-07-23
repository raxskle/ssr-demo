import path from "path";
import Koa from "koa";
import Router from "@koa/router";
import { handleRequest } from "./handle-request.js";
import { handleDevSSR } from "./ssr/dev.js";
import { handleProdSSR } from "./ssr/prod.js";
import koaStatic from "koa-static";
export const __dirname = path.resolve();
export const isDevelopment = process.env.NODE_ENV === "development";
const createServer = async () => {
    const app = new Koa();
    const router = new Router();
    router.all("/data/:action", handleRequest);
    if (isDevelopment) {
        await handleDevSSR(app, router);
    }
    else {
        await handleProdSSR(router);
    }
    app.use(router.routes()).use(router.allowedMethods());
    app.use(koaStatic(path.join(__dirname, "./dist/client")));
    const port = isDevelopment ? 8001 : 80;
    app.listen(port, () => {
        console.log(`server is listening in ${port}`);
    });
};
createServer();
