import { PageContext } from '../../../renderer/types';

export async function onBeforeRender(pageContext: PageContext) {
    const { routeParams, user } = pageContext;

    return {
        pageContext: { routeParams, user },
    };
}
