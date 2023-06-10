import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
    plugins: [react(), ssr()],
    build: {
        modulePreload: {
            polyfill: true,
        },
    },
    server: {
        middlewareMode: true,
        port: 5000,
    },
};

export default config;
