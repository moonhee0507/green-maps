import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';
import { UserConfig } from 'vite';

const config: UserConfig = {
    plugins: [react(), ssr({ prerender: false }), vercelSsr()],
    build: {
        manifest: true,
    },
    server: {
        middlewareMode: true,
        port: 5000,
    },
    vercel: {},
};

export default config;
