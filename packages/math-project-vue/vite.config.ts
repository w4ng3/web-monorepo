import path from 'node:path'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],
  // https://github.com/vitest-dev/vitest
  // test: {
  //   // 启用类似 jest 的全局测试 API
  //   globals: true,
  //   // 使用 happy-dom 模拟 DOM
  //   environment: 'happy-dom',
  // },
  resolve: {
    alias: { '@': '/src' },
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://www.zhihu.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
