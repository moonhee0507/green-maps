import fetch from "node-fetch";
async function onBeforeRender(pageContext) {
  const { keyword } = pageContext.routeParams;
  try {
    const resPosts = await fetch(
      `${process.env.NODE_ENV === "production" ? "https://api.green-maps.site/v1" : "https://localhost:5000/v1"}/posts?keyword=${keyword}`,
      {
        headers: {
          "Cache-Control": "max-age=31536000"
        }
      }
    );
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
//# sourceMappingURL=pages_community_search_index-page-server.mjs.map
