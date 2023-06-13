import type { PageContext } from '../../../renderer/types';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
    const { routeParams, user } = pageContext;

    return {
        pageContext: {
            user,
            routeParams,
        },
    };
}
