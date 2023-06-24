import type { PageContext } from '../../../renderer/types';

export const documentProps = {
    title: '게시글 | Green Maps',
    description: '채식 식당 지도 서비스 게시글 페이지',
};

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
    const { routeParams } = pageContext;

    if (routeParams) {
        return {
            pageContext: { routeParams },
        };
    } else {
        return {
            pageContext: {
                routeParams: {},
            },
        };
    }
}
