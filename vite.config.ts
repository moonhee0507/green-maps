import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import vercel from 'vite-plugin-vercel';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig, UserConfig } from 'vite';

export default defineConfig(async ({ command, mode }) => {
    const isProduction = mode === 'production';

    return {
        plugins: [
            react(),
            ssr({ prerender: { partial: true } }),
            vercel(),
            vercelSsr(),
            VitePWA({
                registerType: 'autoUpdate',
                injectRegister: 'auto',
                manifest: {
                    short_name: '그린맵',
                    name: '채식 지도',
                    description: '채식 지도 북마크 서비스',
                    icons: [
                        {
                            src: '/images/icon.png',
                            type: 'image/png',
                            sizes: '512x512',
                        },
                        {
                            src: '/images/icon-192.png',
                            type: 'image/png',
                            sizes: '192x192',
                        },
                        {
                            src: '/images/icon-384.png',
                            type: 'image/png',
                            sizes: '384x384',
                        },
                        {
                            src: '/images/icon-1024.png',
                            type: 'image/png',
                            sizes: '1024x1024',
                        },
                        {
                            src: 'images/icon-mask.png',
                            type: 'image/png',
                            sizes: '240x240',
                            purpose: 'any maskable',
                        },
                    ],
                    start_url: '/',
                    display: 'standalone',
                    theme_color: '#00784a',
                    background_color: '#00784a',
                    lang: 'ko',
                    orientation: 'portrait',
                    categories: ['food'],
                },
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
