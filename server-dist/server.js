import fs from "fs";
import path from "path";
import Koa from "koa";
import koaConnect from "koa-connect";
import Router from "@koa/router";
import { createServer as createViteServer } from "vite";
import sendFile from "koa-send";
const __dirname = path.resolve();
const isDevelopment = process.env.NODE_ENV === "development";
console.log(process.env.NODE_ENV);
const createServer = async () => {
    const app = new Koa();
    const router = new Router();
    router.all("/data", async (ctx) => {
        ctx.body = "data";
    });
    if (isDevelopment) {
        // 创建 vite 服务
        const viteServer = await createViteServer({
            root: process.cwd(),
            logLevel: "error",
            server: {
                middlewareMode: true,
            },
            appType: "custom", // koa 接管服务器
        });
        // 注册 vite 的 Connect 实例作为中间件
        app.use(koaConnect(viteServer.middlewares));
        router.all("/(.*)", async (ctx) => {
            try {
                // 1. 获取index.html
                let template = fs.readFileSync(path.resolve(__dirname + "/app/index.html"), "utf-8");
                // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
                template = await viteServer.transformIndexHtml(ctx.path, template);
                // 3. 加载服务器入口, vite.ssrLoadModule 将自动转换
                const { render } = await viteServer.ssrLoadModule(__dirname + "/app/entry-server.ts");
                //  4. 同步获取数据
                const { syncFunc } = await viteServer.ssrLoadModule(__dirname + "/src/sync-data.ts");
                const syncData = await syncFunc(ctx);
                //  5. 渲染应用的 HTML
                const [renderedHtml, state] = await render(ctx, syncData);
                const html = template
                    .replace("<!--ssr-outlet-->", renderedHtml)
                    .replace("<!--pinia-state-->", state);
                ctx.type = "text/html";
                ctx.body = html;
            }
            catch (e) {
                viteServer && viteServer.ssrFixStacktrace(e);
                console.log(e.stack);
                ctx.throw(500, e.stack);
            }
        });
    }
    else {
        router.all("/(.*)", async (ctx) => {
            try {
                // 请求的是静态资源 或者/favicon.ico
                const clientRoot = path.resolve("dist/client");
                if (ctx.path.startsWith("/assets")) {
                    await sendFile(ctx, ctx.path, { root: clientRoot });
                    return;
                }
                // 1. 获取index.html
                const template = fs.readFileSync(path.resolve(__dirname + "/dist/client/app/index.html"), "utf-8");
                // 3. 加载服务器入口
                const { render } = await import("../dist/server/entry-server.js");
                //  4. 同步获取数据
                const { syncFunc } = await import("./sync-data.js");
                const syncData = await syncFunc(ctx);
                //  5. 渲染应用的 HTML
                const [renderedHtml, state] = await render(ctx, syncData);
                const html = template
                    .replace("<!--ssr-outlet-->", renderedHtml)
                    .replace("<!--pinia-state-->", state);
                ctx.type = "text/html";
                ctx.body = html;
            }
            catch (e) {
                console.log(e.stack);
                ctx.throw(500, e.stack);
            }
        });
    }
    app.use(router.routes()).use(router.allowedMethods());
    app.listen(9000, () => {
        console.log("server is listening in 9000");
    });
};
createServer();
