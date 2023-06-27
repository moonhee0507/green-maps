import fetch from "node-fetch";
async function onBeforeRender(pageContext) {
  const { restaurantId } = pageContext.routeParams;
  const res = await fetch(
    `${process.env.NODE_ENV === "production" ? "https://api.green-maps.site/v1" : "https://localhost:5000/v1"}/restaurants/${restaurantId}`,
    {
      headers: {
        "Cache-Control": "max-age=31536000"
      }
    }
  );
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
//# sourceMappingURL=pages_search_restaurant_reviews_create_index-page-server.mjs.map
