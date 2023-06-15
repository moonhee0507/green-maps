async function onBeforeRender(pageContext) {
  const { routeParams, user } = pageContext;
  return {
    pageContext: { routeParams, user }
  };
}
export {
  onBeforeRender
};
