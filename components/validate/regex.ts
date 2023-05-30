// (?=)는 '전방탐색(lookahead)'을 의미. 예를 들어 `(?=.*[A-Za-z])`는 현재 위치에서 0번 이상의 임의의 영문이 적어도 한번 이상 나와야 한다는 의미.
export const validatePassword = (str: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*-+_=?]).{8,}$/g;

    return regex.test(str);
};
