import { renderToString } from "vue/server-renderer";
import { createApp } from "./main";
import type { Context } from "koa";
import { useMainStore } from "./store";
import type { SyncData } from "../src/sync-data";
import { createServerRouter } from "./router";

export async function render(ctx: Context, syncData: SyncData) {
  const { app, pinia } = createApp();

  // 路由注册
  const router = createServerRouter();
  app.use(router);
  await router.push(ctx.path); // 服务端要手动加入初始路由
  await router.isReady();  // 确认完成初始导航

  // pinia
  const store = useMainStore(pinia);
  store.loadSyncData(syncData);

  const html = await renderToString(app, {});
  const state = `
    <script>
      window.__pinia = ${JSON.stringify(pinia.state.value)};
    </script>
    `;

  return [html, state];
}
