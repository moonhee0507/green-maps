import type { PageContext } from '../../../renderer/types';

export const documentProps = {
    title: '채식 식당 검색 | Green Maps',
    description: '채식 식당 지도 검색 페이지',
};

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
