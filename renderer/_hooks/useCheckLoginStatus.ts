import { useEffect, useState } from 'react';
import { API_URL } from '../CONSTANT_URL';

export { useCheckLoginStatus };

function useCheckLoginStatus(): boolean {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const res = await fetch(`${API_URL}/users/`, {
                    credentials: 'include',
                    method: 'GET',
                });
                const data = await res.json();

                if (data.success === true) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
            }
        };

        checkLoginStatus();
    }, []);

    return isLoggedIn;
}
