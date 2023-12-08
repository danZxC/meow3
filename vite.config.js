import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      publicPath: '/project-2/',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
