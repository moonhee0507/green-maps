import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
const documentProps = {
  title: "커뮤니티 | Green Maps",
  description: "채식 식당 지도 서비스 커뮤니티"
};
async function onBeforeRender(pageContext) {
  const res = await fetch(`${API_URL}/posts/`);
  if (res.ok) {
    const postProps = await res.json();
    const pageProps = { postProps };
    return {
      pageContext: { pageProps }
    };
  }
}
export {
  documentProps,
  onBeforeRender
};
//# sourceMappingURL=pages_community_index-page-server.mjs.map
