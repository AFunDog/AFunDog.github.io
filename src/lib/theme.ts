import { ref, App } from 'vue';
import { useColorMode } from '@vueuse/core';

// 创建主题状态
export const colorMode = useColorMode({
  selector: 'html',
  attribute: 'class',
  initialValue: 'auto',
});

export const isInfoBorderShow = ref(true);

// 创建 Vue 插件
const ThemePlugin = {
  install(app: App) {
    app.provide('isInfoBorderShow', isInfoBorderShow);
  }
};

export default ThemePlugin;
