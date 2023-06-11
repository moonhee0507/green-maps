import fetch from 'node-fetch';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

export { onBeforeRender };

// /community에서 넘어오면 CSR이고, 새로고침되면 SSR
async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const { postId } = pageContext.routeParams;
    try {
        const resPosts = await fetch(`${API_URL}/posts/${postId}`, {
            headers: {
                'Cache-Control': 'max-age=31536000',
            },
        });
        const postInfo = await resPosts.json();

        const pageProps = { postInfo };
        return {
            pageContext: {
                pageProps,
            },
        };
    } catch (err) {
        console.error(err);
    }
}
