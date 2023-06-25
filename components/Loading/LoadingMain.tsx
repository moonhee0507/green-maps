import React from 'react';
import gifSpinner from '/images/spinner.webp';

export default function LoadingMain() {
    return (
        <div style={{ flexGrow: '1', position: 'relative' }}>
            <img
                src={gifSpinner}
                alt="로딩 이미지"
                style={{
                    width: '50px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </div>
    );
}
