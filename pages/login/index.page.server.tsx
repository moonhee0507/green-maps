import fetch from 'node-fetch';
import type { PageContext } from '../../renderer/types';

export async function onBeforeRender(pageContext: PageContext) {
    console.log('<<<pageContext.redirectTo>>>', pageContext.redirectTo);
    /**
     * @token {string}
     * @user { isLoggedIn: boolean } (default: false)
     */
    const { token, user } = pageContext;

    try {
        const res = await fetch(`http://localhost:5000/api/users/check-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token }),
        });

        const authInfo: any = await res.json();

        return {
            pageContext: {
                user: {
                    isLoggedIn: authInfo.auth || false,
                    info: authInfo.auth ? authInfo.user : null,
                },
            },
        };
    } catch (err) {
        console.error(err);
    }
}
