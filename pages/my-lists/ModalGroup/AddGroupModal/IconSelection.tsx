import React, { useEffect } from 'react';
import imgStar from '/images/icon-star.svg';
import imgHeart from '/images/icon-heart.svg';
import imgBolt from '/images/icon-bolt.svg';
import imgCheck from '/images/icon-check.svg';
import imgEye from '/images/icon-eye.svg';
import imgSmile from '/images/icon-smile.svg';
import imgLightBulb from '/images/icon-lightbulb.svg';
import imgClover from '/images/icon-clover.svg';
import imgSquare from '/images/icon-square.svg';
import imgThumbsUp from '/images/icon-thumbs-up.svg';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { ICON_STANDARD } from '../../../../renderer/_reducers/_slices/myListSlice';

const arrIcon = [
    imgStar,
    imgHeart,
    imgBolt,
    imgCheck,
    imgEye,
    imgSmile,
    imgLightBulb,
    imgClover,
    imgSquare,
    imgThumbsUp,
];

export function IconSelection() {
    return (
        <>
            <p className="txt-icon-selection">아이콘 선택</p>
            <div className="wrapper-icon-group">
                {arrIcon.map((icon, i) => (
                    <IconContainer key={Math.random()} icon={icon} />
                ))}
            </div>
        </>
    );
}

function IconContainer({ icon }: { icon: string }) {
    const dispatch = useAppDispatch();
    const selectedIcon = useAppSelector((state) => state.myListSlice.selectedIcon);

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        const arrStyleIcon = document.querySelectorAll('.style-icon');

        arrStyleIcon.forEach((dom) => {
            if (dom !== event.currentTarget.children[0]) {
                dom.classList.remove('on');
            }
        });

        dispatch(ICON_STANDARD(icon));
    }

    // 키보드 접근성
    function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter') {
            const arrStyleIcon = document.querySelectorAll('.style-icon');

            arrStyleIcon.forEach((dom) => {
                if (dom !== event.currentTarget) {
                    dom.classList.remove('on');
                }
            });

            dispatch(ICON_STANDARD(icon));
        }
    }

    return (
        <div className="container-icon" onClick={handleClick}>
            <div className={`style-icon ${icon === selectedIcon ? 'on' : ''}`} tabIndex={0} onKeyDown={handleKeyDown}>
                <img src={icon} alt="그룹 아이콘" />
            </div>
        </div>
    );
}
