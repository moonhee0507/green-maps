async function onBeforeRender(pageContext) {
  const { routeParams } = pageContext;
  return {
    pageContext: { routeParams }
  };
}
export {
  onBeforeRender
};
