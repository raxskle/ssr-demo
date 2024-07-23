import fs from "fs";
import path from "path";
import type { Context } from "koa";
import { pageRoutes } from "./page-config.js";
import { createRequire } from "node:module";
import { __dirname } from "../index.js";

const require = createRequire(import.meta.url);
const manifest = require("../../dist/client/.vite/ssr-manifest.json");

export const handleProdSSR = async (router) => {
  const prodHandler = async (ctx: Context) => {
    try {
      // 1. 获取index.html
      const template = fs.readFileSync(
        path.resolve(__dirname + "/dist/client/app/index.html"),
        "utf-8"
      );

      // 2. 加载服务器入口
      const { render } = await import("../../dist/server/entry-server.js");

      // 3. 同步获取数据
      const { syncFunc } = await import("../sync-data.js");
      const syncData = await syncFunc(ctx);

      // 4. 渲染应用的 HTML
      const [renderedHtml, state, preloadLinks] = await render(
        ctx,
        syncData,
        manifest
      );

      const html = template
        .replace("<!--ssr-outlet-->", renderedHtml)
        .replace("<!--pinia-state-->", state)
        .replace("<!--preload-links-->", preloadLinks);

      ctx.type = "text/html";
      ctx.body = html;
    } catch (e) {
      console.log(e.stack);
      ctx.throw(500, e.stack);
    }
  };

  pageRoutes.forEach((route) => {
    router.all(route.path, prodHandler);
  });
};
