import { PageContext } from '../../renderer/types';

export { onBeforeRender };

function onBeforeRender(pageContext: PageContext) {
    const { user } = pageContext;

    return {
        pageContext: user,
    };
}
