import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import vercel from 'vite-plugin-vercel';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';
import { defineConfig, UserConfig } from 'vite';

export default defineConfig(async ({ command, mode }) => {
    return {
        plugins: [react(), ssr({ prerender: { partial: true } }), vercel(), vercelSsr()],
        build: {
            manifest: true,
            rollupOptions: {
                external: ['../../../../dist/server/importBuild.cjs', './xhr-sync-worker.js', ''],
            },
        },
        server: {
            middlewareMode: true,
            host: true,
            port: 5000,
        },
        vercel: {
            prerender: false,
        },
    } as UserConfig;
});
