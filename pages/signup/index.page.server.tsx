import type { PageContext } from '../../renderer/types';
import { checkToken } from '../API_URL/api.js';

export async function onBeforeRender(pageContext: PageContext) {
    /**
     * @token {string}
     * @user { isLoggedIn: boolean } (default: false)
     */
    const { token } = pageContext;

    try {
        const authInfo = await checkToken(token);

        return {
            pageContext: {
                user: authInfo,
            },
        };
    } catch (err) {
        console.error(err);
    }
}
