import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import vercel from 'vite-plugin-vercel';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';
import { defineConfig, UserConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
    const isProduction = mode === 'production';

    return {
        // define: {
        //     __API_URL__: isProduction ? 'https://api.green-maps.site/v1' : 'https://localhost:5000/v1',
        // },
        plugins: [basicSsl(), react(), ssr({ prerender: { partial: true } }), vercel(), vercelSsr()],
        build: {
            manifest: true,
        },
        server: {
            https: true,
            middlewareMode: true,
            port: 5000,
        },
    } as UserConfig;
});
