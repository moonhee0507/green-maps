import type { PageContext } from '../../../renderer/types';

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
    const { routeParams } = pageContext;

    return {
        pageContext: {
            routeParams,
        },
    };
}
