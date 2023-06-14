import basicSsl from '@vitejs/plugin-basic-ssl';
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
        },
        server: {
            https: true,
            middlewareMode: true,
            host: 'port-0-green-maps-7xwyjq992lliq95b1a.sel4.cloudtype.app',
            port: 5000,
            headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'https://green-maps-git-preview-moonhee0507.vercel.app',
                'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                'Access-Control-Allow-Headers':
                    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Cookie, Cache-Control',
            },
        },
    } as UserConfig;
});
