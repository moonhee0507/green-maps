import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-8c755a0c.js";
async function onBeforeRender(pageContext) {
  const { keyword } = pageContext.routeParams;
  try {
    const resPosts = await fetch(`${API_URL}/posts?keyword=${keyword}`, {
      headers: {
        "Cache-Control": "max-age=31536000"
      }
    });
    const postInfo = await resPosts.json();
    const pageProps = { postInfo };
    return {
      pageContext: {
        pageProps
      }
    };
  } catch (err) {
    console.error(err);
  }
}
function prerender() {
  return [{ url: "/community/search/@keyword" }];
}
export {
  onBeforeRender,
  prerender
};
