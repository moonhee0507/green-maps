import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-6e20e889.js";
async function onBeforeRender(pageContext) {
  const { postId } = pageContext.routeParams;
  try {
    const resPosts = await fetch(`${API_URL}/posts/${postId}`, {
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
export {
  onBeforeRender
};
