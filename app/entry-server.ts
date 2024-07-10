import { renderToString } from "vue/server-renderer";
import { createApp } from "./main";
import type { Context } from "koa";
import { useMainStore } from "./store";
import type { SyncData } from "../src/sync-data";

export async function render(ctx: Context, syncData:SyncData) {
  const { app, pinia } = createApp();
  const store = useMainStore(pinia);
  store.loadSyncData(syncData);

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  const html = await renderToString(app, {});
  const state = `
    <script>
      window.__pinia = ${JSON.stringify(pinia.state.value)};
    </script>
    `;

  return [html, state];
}
