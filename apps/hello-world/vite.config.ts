import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
    build: {
      target: 'esnext'
    },
    server: {
        port: 3000
    },
    plugins: [
        ...VitePluginNode({
            adapter: 'fastify',
            appPath: './src/main.ts',
            exportName: 'serve',
            appName: 'hello-world',
            initAppOnBoot: true,
        })
    ],
    optimizeDeps: {
        // Vite does not work well with optionnal dependencies,
        // you can mark them as ignored for now
        // eg: for nestjs, exlude these optional dependencies:
        // exclude: [
        //   '@nestjs/microservices',
        //   '@nestjs/websockets',
        //   'cache-manager',
        //   'class-transformer',
        //   'class-validator',
        //   'fastify-swagger',
        // ],
    },
});
