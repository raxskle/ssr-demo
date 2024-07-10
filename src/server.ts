import fs from "fs";
import path from "path";
import Koa from "koa";
import koaConnect from "koa-connect";
import Router from "@koa/router";
import { createServer as createViteServer } from "vite";

const __dirname = path.resolve();
console.log("__dirname", __dirname);

const createServer = async () => {
  const app = new Koa();

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

  const router = new Router();

  router.all("/data", async (ctx) => {
    ctx.body = "data";
  });

  router.all("/(.*)", async (ctx) => {
    try {
      // 1. 获取index.html
      let template = fs.readFileSync(
        path.resolve(__dirname + "/app/index.html"),
        "utf-8"
      );

      // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
      template = await viteServer.transformIndexHtml(ctx.path, template);

      // 3. 加载服务器入口, vite.ssrLoadModule 将自动转换
      const { render } = await viteServer.ssrLoadModule(
        __dirname + "/app/entry-server.ts"
      );

      //  4. 同步获取数据
      const { syncFunc } = await viteServer.ssrLoadModule(
        __dirname + "/src/sync-data.ts"
      );
      const syncData = await syncFunc(ctx);

      //  5. 渲染应用的 HTML
      const [renderedHtml, state] = await render(ctx, syncData);

      const html = template
        .replace("<!--ssr-outlet-->", renderedHtml)
        .replace("<!--pinia-state-->", state);

      ctx.type = "text/html";
      ctx.body = html;
    } catch (e) {
      viteServer && viteServer.ssrFixStacktrace(e);
      console.log(e.stack);
      ctx.throw(500, e.stack);
    }
  });

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(9000, () => {
    console.log("server is listening in 9000");
  });
};

createServer();
