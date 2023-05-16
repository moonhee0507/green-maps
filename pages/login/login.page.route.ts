import type { PageContext } from '../../renderer/types';

export default (pageContext: PageContext) => {
    // 인증되지 않은 사용자에게만 로그인 페이지가 렌더링
    if (userIsLoggedIn(pageContext)) return false;

    return {
        // 모든 다른 라우터를 오버라이드하기 위해 precedence 숫자로 99 사용
        precedence: 99,
    };
};

function userIsLoggedIn(pageContext: PageContext) {
    console.log('userIsLoggedIn', pageContext.user);

    return pageContext.user !== null || pageContext.user !== undefined;
}
