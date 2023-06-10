import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-8c755a0c.js";
async function onBeforeRender(pageContext) {
  const { reviewId } = pageContext.routeParams;
  const { user } = pageContext;
  const res = await fetch(`${API_URL}/reviews/${reviewId}`);
  const data = await res.json();
  if (data.success) {
    return {
      pageContext: {
        review: data.review,
        user
      }
    };
  }
}
function prerender() {
  return [{ url: "/search/@restaurantId/reviews/@reviewId/edit" }];
}
export {
  onBeforeRender,
  prerender
};
