import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Keep devtools plugin disabled on CI/server by default
const conditionalPlugins = []

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || '/personalwebsite/',
  plugins: [
    vue(),
    ...conditionalPlugins
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
