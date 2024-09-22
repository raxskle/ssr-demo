import { createApp } from "./main";
import { createClientRouter } from "./router";
const { app, pinia } = createApp();

const router = createClientRouter();
app.use(router);

// 客户端激活获取pinia数据
if (window && window.__pinia) {
  pinia.state.value = window.__pinia;
  window.__pinia = undefined;
}

router.isReady().then(() => {
  app.mount("#app", true);
});
