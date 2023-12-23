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
  validateNickName as a,
  validatePassword as b,
  validateId as v
};
//# sourceMappingURL=chunk-7d56c997.js.map
