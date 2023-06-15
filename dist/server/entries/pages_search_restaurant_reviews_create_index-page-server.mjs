import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
async function onBeforeRender(pageContext) {
  const { restaurantId } = pageContext.routeParams;
  const res = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
    headers: {
      "Cache-Control": "max-age=31536000"
    }
  });
  const data = await res.json();
  if (data.success) {
    return {
      pageContext: {
        restaurantInfo: data.restaurantInfo
      }
    };
  } else {
    return {
      pageContext: {
        restaurantInfo: {}
      }
    };
  }
}
export {
  onBeforeRender
};
