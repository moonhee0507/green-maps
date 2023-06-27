function onBeforeRender(pageContext) {
  const { routeParams } = pageContext;
  return {
    pageContext: { routeParams }
  };
}
export {
  onBeforeRender
};
//# sourceMappingURL=pages_search_keyword_index-page-server.mjs.map
