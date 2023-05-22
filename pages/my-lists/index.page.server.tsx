import type { PageContext } from '../../renderer/types';

export async function onBeforeRender(pageContext: PageContext) {
    const { user } = pageContext;
    return {
        pageContext: { user },
    };
}
