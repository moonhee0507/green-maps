import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import vercel from 'vite-plugin-vercel';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';
import { defineConfig, UserConfig } from 'vite';

export default defineConfig(async ({ command, mode }) => {
    return {
        plugins: [react(), ssr({ prerender: false }), vercel(), vercelSsr()],
        build: {
            manifest: true,
        },
        server: {
            middlewareMode: true,
            host: true,
            port: 5000,
        },
    } as UserConfig;
});
