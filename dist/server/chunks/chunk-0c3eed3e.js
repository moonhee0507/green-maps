function isSameDay(date) {
  const arrDate = date.split(". ");
  arrDate.pop();
  const today = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(/* @__PURE__ */ new Date());
  const arrToday = today.split(". ");
  for (let i = 0; i <= 2; i++) {
    if (arrToday[i] !== arrDate[i])
      return false;
  }
  return true;
}
export {
  isSameDay as i
};
//# sourceMappingURL=chunk-0c3eed3e.js.map
