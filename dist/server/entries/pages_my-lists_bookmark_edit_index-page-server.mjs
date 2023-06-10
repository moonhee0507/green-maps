function onBeforeRender(pageContext) {
  const { user } = pageContext;
  return {
    pageContext: { user }
  };
}
export {
  onBeforeRender
};
