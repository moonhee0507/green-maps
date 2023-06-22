const documentProps = {
  title: "채식 식당 검색 | Green Maps",
  description: "채식 식당 지도 검색 페이지"
};
async function onBeforeRender(pageContext) {
  const { routeParams, user } = pageContext;
  return {
    pageContext: {
      user,
      routeParams
    }
  };
}
export {
  documentProps,
  onBeforeRender
};
