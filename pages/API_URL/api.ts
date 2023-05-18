// import fetch from 'node-fetch';

export const API_URL = 'http://localhost:5000/api';

export async function checkToken(token: string | undefined) {
    try {
        const res = await fetch(`${API_URL}/users/check-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token }),
        });

        const authInfo: any = await res.json();

        return {
            isLoggedIn: authInfo.auth || false,
            info: authInfo.auth ? authInfo.user : null,
        };
    } catch (err) {
        console.error(err);
        return {
            isLoggedIn: false,
            info: null,
        };
    }
}
