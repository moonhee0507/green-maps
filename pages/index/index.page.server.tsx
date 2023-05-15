import fetch from 'node-fetch';
import { PageContext } from '../../renderer/types';
export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
    const { token } = pageContext;
    try {
        const res = await fetch(`http://localhost:5000/api/users/check-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token }),
        });

        const authInfo: any = await res.json();
        const user = authInfo.user;

        const pageProps = { user };

        return {
            pageContext: { pageProps },
        };
    } catch (err) {
        console.error(err);
    }
}
