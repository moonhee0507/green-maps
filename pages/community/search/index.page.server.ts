import fetch from 'node-fetch';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

export { onBeforeRender };
export { prerender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const { keyword } = pageContext.routeParams;
    try {
        const resPosts = await fetch(`http://localhost:5000/api/posts?keyword=${keyword}`, {
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
