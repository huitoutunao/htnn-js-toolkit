import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: ['src/index.js'],
      name: 'HtnnJsToolkit',
      formats: ['es', 'cjs', 'umd', 'iife'],
      fileName: (format) => `js-toolkit.${format}.js`,
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    outDir: 'lib',
  },
})
