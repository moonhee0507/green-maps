import React, { useState, useEffect } from 'react';
import { ButtonGoBack } from '../button/buttonGoBack';

export { TopBar };

const hasWindow = typeof window !== 'undefined';

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
        </div>
    );
}
