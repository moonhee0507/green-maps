async function onBeforeRender(pageContext) {
  var _a;
  const postId = ((_a = pageContext.routeParams) == null ? void 0 : _a.postId) || "";
  return {
    pageContext: {
      postId
    }
  };
}
export {
  onBeforeRender
};
