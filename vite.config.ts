import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 允许外部设备通过 IP 访问
    host: true,
    // 使用 5173 端口启动
    port: 5173
  }
})
