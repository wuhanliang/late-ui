import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
export default defineConfig(({ command, mode }) => {
  const reslut = {
    plugins: [
      vue()
    ],
  }

  if (command === 'build') { // 打包调用
    reslut.build = {
      // outDir: 'dist',
      lib: {
        entry: path.resolve(__dirname, 'src/packages/index.js'),
        name: 'late-ui',
        fileName: (format) => `late-ui.${format}.js`
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }



  return reslut
})
