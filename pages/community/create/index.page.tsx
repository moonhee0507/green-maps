import React from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { Create } from './Create';

export { Page };

function Page() {
    return (
        <>
            <TopBar title="글 쓰기" />
            <Create />
        </>
    );
}
