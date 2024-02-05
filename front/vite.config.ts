import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import graphql from '@rollup/plugin-graphql';
import path from 'node:path';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), graphql()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        host: true,
        strictPort: true
    },
    optimizeDeps: {
        include: ['@apollo/client/core', '@apollo/client/cache']
    },
    css: {
        postcss: {
            plugins: [autoprefixer]
        },
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/theme/main.scss";`
            }
        }
    }
});
