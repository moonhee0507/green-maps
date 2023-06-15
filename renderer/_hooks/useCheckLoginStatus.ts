import { navigate } from 'vite-plugin-ssr/client/router';
import { useEffect, useState } from 'react';
import { API_URL } from '../CONSTANT_URL';
import { UserInfo } from '../../server/models/User';

type IsLoggedIn = boolean;
type User = UserInfo | null;

export { useCheckLoginStatus };

function useCheckLoginStatus(): [IsLoggedIn, User] {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const res = await fetch(`${API_URL}/users/`, {
                    credentials: 'include',
                    method: 'GET',
                });
                const data = (await res.json()) as { success: boolean; user: UserInfo };
                console.log('data', data);

                if (data.success === true) {
                    // 로그인 했음.
                    setIsLoggedIn(true);
                    setUserInfo(data.user);
                } else {
                    // 로그인 안했음
                    setIsLoggedIn(false);
                    setUserInfo(null);

                    if (window.location.pathname === '/my') {
                        navigate('/login');
                    }
                }
            } catch (error) {
                // 로그인 안했음
                setIsLoggedIn(false);
                setUserInfo(null);

                if (window.location.pathname === '/my') {
                    navigate('/login');
                }
            }
        };

        checkLoginStatus();
    }, []);

    return [isLoggedIn, userInfo];
}
