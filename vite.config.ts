import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true, // 启用 sourcemap 生成
    minify:false, // 禁用代码压缩
    terserOptions: {
      compress: {
        drop_console: false, // 保留 console 语句
        drop_debugger: false, // 保留 debugger 语句
      },
      mangle: false, // 禁用变量名混淆
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname + "/app/index.html"),
      },
    },
  },
});
