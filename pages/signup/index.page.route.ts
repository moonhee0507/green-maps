import { CONDITIONAL_ACCESSIBLE_PAGE } from '../../renderer/_default.page.route';
import type { PageContext } from '../../renderer/types';

export default (pageContext: PageContext) => {
    if (userIsLoggedIn(pageContext)) {
        if (pageContext.urlOriginal && CONDITIONAL_ACCESSIBLE_PAGE.includes(pageContext.urlOriginal)) {
            return false;
        }
    }

    return true;
};

function userIsLoggedIn(pageContext: PageContext) {
    return pageContext.user.isLoggedIn;
}
