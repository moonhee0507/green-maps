import fetch from 'node-fetch';
import { API_URL } from '../../renderer/CONSTANT_URL';
import type { PageContext } from '../../renderer/types';
import type { Post } from '../../server/models/Post';

export { onBeforeRender };

// 가장 최근 20개 게시글만 서버 사이드로 렌더링됨.
async function onBeforeRender(pageContext: PageContext) {
    const res = await fetch(`${API_URL}/posts/`);

    if (res.ok) {
        const postProps = (await res.json()) as {
            total: number;
            countLimit: number;
            currentPage: number;
            lists: Post[];
        };

        const pageProps = { postProps };

        return {
            pageContext: { pageProps },
        };
    }
}
