import { PageContext } from '../../../renderer/types';

export { onBeforeRender };

// /community에서 넘어오면 CSR이고, 새로고침되면 SSR
async function onBeforeRender(pageContext: PageContext) {
    const postId = pageContext.routeParams?.postId || '';

    return {
        pageContext: {
            postId: postId,
        },
    };
}
