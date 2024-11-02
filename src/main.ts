import { createSSRApp } from "vue";
import App from "./App.vue";
import request from './common/request';
export function createApp() {
  const app = createSSRApp(App);
  app.config.globalProperties.$http = request;
  return {
    app,
  };
}
