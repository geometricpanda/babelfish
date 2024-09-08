import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
    build: {
      target: 'esnext'
    },
    server: {
        port: 3003,
        host: '0.0.0.0',
    },
    plugins: [
        ...VitePluginNode({
            adapter: 'fastify',
            appPath: './src/main.ts',
            exportName: 'serve',
            initAppOnBoot: true,
        })
    ],
    optimizeDeps: {},
});
