import { createApp } from "./main";

const { app, pinia } = createApp();

// 客户端激活获取pinia数据
if (window.__pinia) {
  pinia.state.value = window.__pinia;
  window.__pinia = undefined;
}

app.mount("#app");
