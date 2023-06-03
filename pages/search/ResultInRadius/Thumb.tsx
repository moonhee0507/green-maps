import React from 'react';
import imgDummy from '../../../dummy-1.jpg';

export { Thumb };

function Thumb({ category }: { category: string }) {
    return (
        <div className="container-img">
            <img src={imgDummy} alt="업종별 이미지" />
        </div>
    );
}
