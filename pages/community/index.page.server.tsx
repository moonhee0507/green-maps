import fetch from 'node-fetch';
import { API_URL } from '../CONSTANT_URL';

export { onBeforeRender };

// 가장 최근 20개 게시글만 서버 사이드로 렌더링됨.
async function onBeforeRender() {
    try {
        const res = await fetch(`${API_URL}/posts/`);

        const postProps = await res.json();

        const pageProps = { postProps };

        return {
            pageContext: { pageProps },
        };
    } catch (err) {
        console.error(err);
    }
}
