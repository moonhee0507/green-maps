import React from 'react';
import { PageProps } from '../../renderer/types';
import { ButtonGoBack } from '../button/buttonGoBack';
import icon from '/icon.png';

export { TopBar };

const hasWindow = typeof window !== 'undefined';

function TopBar() {
    return (
        <div className="top-bar">
            {hasWindow && window.location.pathname !== '/' ? (
                <ButtonGoBack />
            ) : (
                <h2 style={{ margin: '0', lineHeight: '40px' }}>그린맵</h2>
            )}
        </div>
    );
}
