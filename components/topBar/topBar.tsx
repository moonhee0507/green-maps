import React, { useState } from 'react';
import { ButtonGoBack } from '../button/buttonGoBack';
import { SubmitButton } from '../../pages/community/create/component/SubmitButton';

export { TopBar };

function TopBar(props: { title: string }) {
    const [title] = useState(props.title);

    return (
        <div className="top-bar">
            {title === '홈' ? (
                <h2 style={{ margin: '0', lineHeight: '40px' }}>그린맵</h2>
            ) : (
                <>
                    <ButtonGoBack />
                    <h2 className="top-title">{title}</h2>
                </>
            )}
            {title === '글 쓰기' || title === '글 수정' ? <SubmitButton /> : null}
        </div>
    );
}
