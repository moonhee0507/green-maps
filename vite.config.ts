import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import vercel from 'vite-plugin-vercel';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';
import { defineConfig, UserConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
    return {
        plugins: [basicSsl(), react(), ssr({ prerender: { partial: true } }), vercel(), vercelSsr()],
        build: {
            manifest: true,
            sourcemap: true,
        },
        server: {
            https: true,
            middlewareMode: true,
            port: 5000,
        },
    } as UserConfig;
});
