const validatePassword = (str) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*-+_=?]).{8,}$/g;
  return regex.test(str);
};
const validateId = (str) => {
  const regex = /^[a-zA-Z0-9]{6,20}$/g;
  return regex.test(str);
};
const validateNickName = (str) => {
  const regex = /^[ㄱ-힣a-zA-Z0-9\s]{1,17}$/g;
  return regex.test(str);
};
export {
  validateId as a,
  validateNickName as b,
  validatePassword as v
};
//# sourceMappingURL=chunk-22884288.js.map
