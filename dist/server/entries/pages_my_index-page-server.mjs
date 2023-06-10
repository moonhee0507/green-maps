import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-8c755a0c.js";
async function onBeforeRender(pageContext) {
  var _a;
  const { user } = pageContext;
  const res = await fetch(`${API_URL}/reviews/my?owner=${(_a = user.info) == null ? void 0 : _a.userId}`);
  const data = await res.json();
  return {
    pageContext: {
      user,
      reviews: data.reviews
    }
  };
}
export {
  onBeforeRender
};
