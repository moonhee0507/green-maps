import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-84869d4d.js";
async function onBeforeRender(pageContext) {
  const { restaurantId } = pageContext.routeParams;
  const { user } = pageContext;
  const res = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
    headers: {
      "Cache-Control": "max-age=31536000"
    }
  });
  const data = await res.json();
  if (data.success) {
    return {
      pageContext: {
        restaurantInfo: data.restaurantInfo,
        user
      }
    };
  } else {
    return {
      pageContext: {
        restaurantInfo: {},
        user
      }
    };
  }
}
export {
  onBeforeRender
};
