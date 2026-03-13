import { createApp } from "vue";
import "./css/defStyle.css";
// github markdown 格式
// import 'github-markdown-css'
// 从定义 markdown 格式
import "./css/markdownStyle.css";
// 代码高亮
import "highlight.js/styles/github-dark.css";

import App from "./App.vue";
import router from "./router";
import ThemePlugin from "./lib/theme";

const app = createApp(App);
app.use(ThemePlugin).use(router).mount("#app");
