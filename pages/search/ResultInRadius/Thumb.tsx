import React, { useEffect, useState } from 'react';
import { COPYRIGHT_URL } from '../../../renderer/CONSTANT_URL';
import getAppCategory from '../../../components/image/getAppCategory';
import CATEGORIES from '../../../components/image/CATEGORY';

export { Thumb };

function Thumb({ category }: { category: string }) {
    const [appCategory] = useState(() => getAppCategory(category));
    const [holder, setHolder] = useState('');
    const [src, setSrc] = useState('');

    useEffect(() => {
        const { copyRight, src } = CATEGORIES[appCategory].thumb;
        setHolder(copyRight);
        setSrc(src);
    }, [appCategory]);

    return (
        <div className="container-img">
            <a href={COPYRIGHT_URL} title={`${appCategory} icon`}>
                <span className="sr-only">아이콘 제작자: {holder}</span>
            </a>
            {src !== '' && <img src={src} alt="카테고리 아이콘" />}
        </div>
    );
}
