const documentProps = {
  title: "게시글 | Green Maps",
  description: "채식 식당 지도 서비스 게시글 페이지"
};
async function onBeforeRender(pageContext) {
  const { routeParams } = pageContext;
  if (routeParams) {
    return {
      pageContext: { routeParams }
    };
  } else {
    return {
      pageContext: {
        routeParams: {}
      }
    };
  }
}
export {
  documentProps,
  onBeforeRender
};
//# sourceMappingURL=pages_community_post_index-page-server.mjs.map
