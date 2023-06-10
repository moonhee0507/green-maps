async function onBeforeRender(pageContext) {
  const { routeParams } = pageContext;
  return {
    pageContext: { routeParams }
  };
}
async function prerender() {
  return [{ url: "/my-lists/bookmark/@bookmarkGroupName" }];
}
export {
  onBeforeRender,
  prerender
};
