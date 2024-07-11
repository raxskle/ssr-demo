import { renderToString } from "vue/server-renderer";
import { createApp } from "./main";
import { useMainStore } from "./store";
import type { SyncData } from "../src/sync-data";
import { createServerRouter } from "./router";

export async function render(
  ctx,
  syncData: SyncData,
  manifest: Record<string, string[]> = {}
) {
  const { app, pinia } = createApp();

  // 路由注册
  const router = createServerRouter();
  app.use(router);
  await router.push(ctx.path); // 服务端要手动加入初始路由
  await router.isReady(); // 确认完成初始导航

  // pinia
  const store = useMainStore(pinia);
  store.loadSyncData(syncData);

  const renderCtx: { modules?: string[] } = {};
  const html = await renderToString(app, renderCtx);
  const state = `
    <script>
      window.__pinia = ${JSON.stringify(pinia.state.value)};
    </script>
    `;

  // 仅在生产环境传mainfest
  const preloadLinks = renderPreloadLinks(renderCtx.modules, manifest);
  return [html, state, preloadLinks];
}

/**
 * 解析需要预加载的链接
 * @param modules
 * @param manifest
 * @returns string
 */
function renderPreloadLinks(
  modules: undefined | string[],
  manifest: Record<string, string[]>
): string {
  let links = "";
  const seen = new Set();
  if (modules === undefined) throw new Error();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}

/**
 * 预加载的对应的地址
 * 下面的方法只针对了 js 和 css，如果需要处理其它文件，自行添加即可
 * @param file
 * @returns string
 */
function renderPreloadLink(file: string): string {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else {
    return "";
  }
}
