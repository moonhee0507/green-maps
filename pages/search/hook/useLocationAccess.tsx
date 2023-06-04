import { useState, useEffect } from 'react';
import type { StateToGeolocation } from '../../../renderer/_reducers/_slices/mapSlice';

export default function useLocationAccess() {
    const [locationAccess, setLocationAccess] = useState<StateToGeolocation>('prompt');

    useEffect(() => {
        navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            setLocationAccess(result.state);

            result.addEventListener('change', () => {
                setLocationAccess(result.state);
            });
        });
    }, []);

    return locationAccess;
}
