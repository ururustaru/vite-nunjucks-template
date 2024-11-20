import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import path from 'path';

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [vituum(), nunjucks({
    root: './src'
  })],
}
