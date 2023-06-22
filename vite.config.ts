import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import vercel from 'vite-plugin-vercel';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';
import legacy from '@vitejs/plugin-legacy';
import { defineConfig, UserConfig } from 'vite';

export default defineConfig(async ({ command, mode }) => {
    const isProduction = mode === 'production';

    return {
        plugins: [
            react(),
            ssr({ prerender: { partial: true } }),
            vercel(),
            vercelSsr(),
            legacy({
                targets: ['ie >= 11'],
                additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
            }),
        ],
        build: {
            manifest: true,
        },
        server: {
            https: isProduction,
            middlewareMode: true,
            port: 5000,
        },
    } as UserConfig;
});
