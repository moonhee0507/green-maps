import fetch from 'node-fetch';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

export { onBeforeRender };

// /community에서 넘어오면 CSR이고, 새로고침되면 SSR
async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const { postId } = pageContext.routeParams;

    // const resPosts = await fetch(`${API_URL}/posts/${postId}`, {
    //     headers: {
    //         'Cache-Control': 'max-age=31536000',
    //     },
    // });
    // const postInfo = await resPosts.json();

    // const pageProps = { postInfo };

    // if (pageProps) {
    //     return {
    //         pageContext: {
    //             pageProps,
    //         },
    //     };
    // } else {
    //     return {
    //         pageContext: {},
    //     };
    // }

    return {
        pageContext: {
            postId: postId,
        },
    };
}
