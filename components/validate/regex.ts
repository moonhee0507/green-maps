// (?=)는 '전방탐색(lookahead)'을 의미. 예를 들어 `(?=.*[A-Za-z])`는 현재 위치에서 0번 이상의 임의의 영문이 적어도 한번 이상 나와야 한다는 의미.
export const validatePassword = (str: string): boolean => {
    // 영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*-+_=?]).{8,}$/g;

    return regex.test(str);
};

export const validateId = (str: string): boolean => {
    // 영문 및 숫자 6 ~ 20자
    const regex = /^[a-zA-Z0-9]{6,20}$/g;

    return regex.test(str);
};

export const validateNickName = (str: string): boolean => {
    // 영문, 숫자, 한글 17자 이내
    const regex = /^[ㄱ-힣a-zA-Z0-9\s]{1,17}$/g;

    return regex.test(str);
};
