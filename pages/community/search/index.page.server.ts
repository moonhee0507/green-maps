import fetch from 'node-fetch';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';
import { API_URL } from '../../../renderer/CONSTANT_URL';

export { onBeforeRender };
export { prerender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const { keyword } = pageContext.routeParams;
    try {
        const resPosts = await fetch(`${API_URL}/posts?keyword=${keyword}`, {
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

function prerender() {
    return [{ url: '/community/search/@keyword' }];
}
