import { ref, App } from 'vue';
import { useColorMode } from '@vueuse/core';

// 创建主题状态（单一实例）
// colorMode.value 返回解析后的值: 'dark' | 'light'（auto 会自动解析为当前系统偏好）
// colorModeStore.value 返回用户实际设置: 'auto' | 'dark' | 'light'
const colorModeInstance = useColorMode({
  selector: 'html',
  attribute: 'class',
  initialValue: 'auto',
  disableTransition: false,
});

export const colorMode = colorModeInstance;
export const colorModeStore = colorModeInstance.store;

export const isInfoBorderShow = ref(true);

// 创建 Vue 插件
const ThemePlugin = {
  install(app: App) {
    app.provide('isInfoBorderShow', isInfoBorderShow);
  }
};

export default ThemePlugin;
