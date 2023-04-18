import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
    plugins: [react(), ssr({ prerender: true })],
    base: '/green-maps/',
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$base-url: ${process.env.NODE_ENV === '"production"' ? '"/green-maps/";' : '"/";'}`,
            },
        },
    },
};

export default config;
