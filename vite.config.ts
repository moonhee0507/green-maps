import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { defineConfig, UserConfig } from 'vite';

export default defineConfig(async ({ command, mode }) => {
    return {
        plugins: [react(), ssr({ prerender: false })],
        build: {
            manifest: true,
        },
        server: {
            middlewareMode: true,
            port: 5000,
        },
    } as UserConfig;
});
