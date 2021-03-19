import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'
import { resolve } from 'path'


const join = (p: string = ''): string => {
  return resolve(__dirname, `/src/${p}`)
}

const root = join()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': root,
      "views": join("views")
    }
  }
})
