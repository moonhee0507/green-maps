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
                }

                redirect(data.success);
            } catch (error) {
                setIsLoggedIn(false);
                setUserInfo(null);

                redirect(false);
            }
        };

        checkLoginStatus();
    }, []);

    return [isLoggedIn, userInfo];
}

function redirect(isLoggedIn: boolean): void {
    if (!isLoggedIn) {
        if (window.location.pathname === '/my') {
            window.location.href = '/login';
        }

        if (window.location.pathname === '/my-lists') {
            window.location.href = '/login';
        }
    } else {
        if (window.location.pathname === '/signup' || window.location.pathname === '/login') {
            window.location.href = '/search';
        }
    }
}
