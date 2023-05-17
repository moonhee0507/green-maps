import type { PageContext } from '../../renderer/types';

export default (pageContext: PageContext) => {
    if (pageContext.user.isLoggedIn) return false;

    return true;
};
