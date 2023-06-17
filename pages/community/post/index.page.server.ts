import { PageContext } from '../../../renderer/types';

export { onBeforeRender };

function onBeforeRender(pageContext: PageContext) {
    const { routeParams } = pageContext;

    return {
        pageContext: { routeParams },
    };
}
