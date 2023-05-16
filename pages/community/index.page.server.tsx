import fetch from 'node-fetch';

export { onBeforeRender };

// 가장 최근 20개 게시글만 서버 사이드로 렌더링됨.
async function onBeforeRender() {
    try {
        const res = await fetch(`http://localhost:5000/api/posts/`);

        const postProps = await res.json();

        const pageProps = { postProps };

        return {
            pageContext: { pageProps },
        };
    } catch (err) {
        console.error(err);
    }
}
