import { ref, watch, provide, App } from 'vue';

// 创建主题状态
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
export const isDarkMode = ref(mediaQuery.matches);
export const isInfoBorderShow = ref(true);

// 监听主题颜色发生改变
mediaQuery.addEventListener('change', (e) => {
  isDarkMode.value = e.matches;
  console.debug("主题发生变化 Dark", e.matches);
});

// 监听主题变化并更新 DOM 类
watch(isDarkMode, (value) => {
  document.documentElement.classList.toggle('light', !value);
});

// 创建 Vue 插件
const ThemePlugin = {
  install(app: App) {
    app.provide('isInfoBorderShow', isInfoBorderShow);
    app.provide('isDarkMode', isDarkMode);
  }
};

export default ThemePlugin;