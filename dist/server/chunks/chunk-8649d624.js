function randomizeFileName() {
  const timestamp = (/* @__PURE__ */ new Date()).getTime();
  const randomNum = Math.floor(Math.random() * 1e6);
  return `${timestamp}-${randomNum}`;
}
export {
  randomizeFileName as r
};
//# sourceMappingURL=chunk-8649d624.js.map
