import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-84869d4d.js";
async function onBeforeRender(pageContext) {
  var _a;
  const { user } = pageContext;
  const res = await fetch(`${API_URL}/reviews/my?owner=${typeof user !== "undefined" ? (_a = user.info) == null ? void 0 : _a.userId : null}`);
  if (res.ok) {
    const data = await res.json();
    return {
      pageContext: {
        user,
        reviews: data.reviews
      }
    };
  }
}
export {
  onBeforeRender
};
