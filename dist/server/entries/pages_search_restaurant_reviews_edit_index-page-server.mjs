import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-6e20e889.js";
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
export {
  onBeforeRender
};
