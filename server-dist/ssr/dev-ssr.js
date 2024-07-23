import fs from "fs";
import path from "path";
import koaConnect from "koa-connect";
import { createServer as createViteServer } from "vite";
import { pageRoutes } from "./page-config.js";
import { __dirname } from "../index.js";
export const handleDevSSR = async (app, router) => {
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
    const devHandler = async (ctx) => {
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
    };
    pageRoutes.forEach((route) => {
        router.all(route.path, devHandler);
    });
};
