import fetch from 'node-fetch';
import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import type { PageContext } from '../../../renderer/types';

export const documentProps = {
    title: '게시글 | Green Maps',
    description: '채식 식당 지도 서비스 게시글 페이지',
};

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
    const { routeParams } = pageContext;

    if (routeParams) {
        if (Object.hasOwn(routeParams, 'postId')) {
            const { postId } = routeParams;
            const res = await fetch(`${API_URL}/posts/${postId}`, {
                headers: {
                    'Cache-Control': 'max-age=31536000',
                },
            });

            if (res.status === 200) {
                const post = await res.json();
                return {
                    pageContext: {
                        post: post,
                    },
                };
            } else {
                throw RenderErrorPage({
                    pageContext: {
                        redirectTo: '/community',
                    },
                });
            }
        } else {
            throw RenderErrorPage({
                pageContext: {
                    redirectTo: '/community',
                },
            });
        }
    } else {
        throw RenderErrorPage({
            pageContext: {
                redirectTo: '/community',
            },
        });
    }
}
