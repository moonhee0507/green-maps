import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { Create } from './component/Create';

export { Page };

function Page() {
    const [window, setWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindow(true);
        }

        document.getElementsByTagName('h1')[0].click();
    }, []);
    return (
        <>
            <TopBar title="글 쓰기" />
            {window && <Create />}
        </>
    );
}
