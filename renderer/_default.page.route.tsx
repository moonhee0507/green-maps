import { PageContext } from './types';

export async function onBeforeRoute(pageContext: PageContext) {
    const { token } = pageContext;

    /**
     * @token {string}
     * @user { isLoggedIn: boolean } (default: false)
     */

    try {
        let fetch;

        if (typeof window === 'undefined') {
            const nodeFetch = await import('node-fetch');
            fetch = nodeFetch.default;

            const res = await fetch(`http://localhost:5000/api/users/check-token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: token }),
            });

            const authInfo: any = await res.json();
            console.log('+++클라이언트 authInfo+++', authInfo);

            return {
                pageContext: {
                    user: {
                        isLoggedIn: authInfo.auth || false,
                        info: authInfo.auth ? authInfo.user : null,
                    },
                },
            };
        } else {
            fetch = window.fetch;
            const res = await fetch(`http://localhost:5000/api/users/`);

            const authInfo: any = await res.json();
            console.log('+++서버 authInfo+++', authInfo);

            return {
                pageContext: {
                    user: {
                        isLoggedIn: authInfo.success || false,
                        info: authInfo.success ? authInfo.user : null,
                    },
                },
            };
        }
    } catch (err) {
        console.error(err);
    }
}
