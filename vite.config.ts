import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'
import { resolve } from 'path'

const join = (p: string = ''): string => {
  return resolve(__dirname, `/src/${p}`)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(),
      "api": join("api"),
      "views": join("views"),
      "config": join("config"),
      "plugin": join("plugins"),
      "layout": join("components/layout"),
      "component": join("components"),
    }
  }
})
