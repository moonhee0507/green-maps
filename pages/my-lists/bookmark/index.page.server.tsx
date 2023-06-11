import { PageContext } from '../../../renderer/types';

export async function onBeforeRender(pageContext: PageContext) {
    const { routeParams } = pageContext;

    return {
        pageContext: { routeParams },
    };
}
