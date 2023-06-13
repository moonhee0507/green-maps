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
  onBeforeRender
};
