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
                if (data.success === true) {
                    setIsLoggedIn(true);
                    setUserInfo(data.user);
                } else {
                    setIsLoggedIn(false);
                    setUserInfo(null);

                    if (window.location.pathname === '/my') {
                        navigate('/login');
                    }

                    if (window.location.pathname === '/my-lists') {
                        navigate('/login');
                    }
                }
            } catch (error) {
                setIsLoggedIn(false);
                setUserInfo(null);

                if (window.location.pathname === '/my') {
                    navigate('/login');
                }

                if (window.location.pathname === '/my-lists') {
                    navigate('/login');
                }
            }
        };

        checkLoginStatus();
    }, []);

    return [isLoggedIn, userInfo];
}
