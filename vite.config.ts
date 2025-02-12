import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/infraestructure/utils'),
      '@providers': path.resolve(__dirname, './src/infraestructure/providers'),
      '@constants': path.resolve(__dirname, './src/infraestructure/constants'),
      '@hooks': path.resolve(__dirname, './src/infraestructure/hooks'),
      '@pages': path.resolve(__dirname, './src/infraestructure/pages'),
      '@components': path.resolve(
        __dirname,
        './src/infraestructure/components'
      ),
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
})
