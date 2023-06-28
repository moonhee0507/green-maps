import fetch from "node-fetch";
import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
const documentProps = {
  title: "게시글 | Green Maps",
  description: "채식 식당 지도 서비스 게시글 페이지"
};
async function onBeforeRender(pageContext) {
  const { routeParams } = pageContext;
  if (routeParams) {
    if (Object.hasOwn(routeParams, "postId")) {
      const { postId } = routeParams;
      const res = await fetch(`${API_URL}/posts/${postId}`, {
        headers: {
          "Cache-Control": "max-age=31536000"
        }
      });
      if (res.status === 200) {
        const post = await res.json();
        return {
          pageContext: {
            post
          }
        };
      } else {
        throw RenderErrorPage({
          pageContext: {
            redirectTo: "/community"
          }
        });
      }
    } else {
      throw RenderErrorPage({
        pageContext: {
          redirectTo: "/community"
        }
      });
    }
  } else {
    throw RenderErrorPage({
      pageContext: {
        redirectTo: "/community"
      }
    });
  }
}
export {
  documentProps,
  onBeforeRender
};
//# sourceMappingURL=pages_community_post_index-page-server.mjs.map
