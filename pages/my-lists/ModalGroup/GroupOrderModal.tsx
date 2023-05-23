import React, { MouseEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import { ORDER_MODAL, ORDER_STANDARD } from '../../../renderer/_reducers/_slices/myListSlice';
import closeImg from '/images/icon-plus.svg';

export { GroupOrderModal };

function GroupOrderModal() {
    const dispatch = useAppDispatch();
    const orderStandard = useAppSelector((state) => state.myListSlice.groupNameOrder);

    function handleOrder(event: MouseEvent<HTMLButtonElement>) {
        dispatch(ORDER_STANDARD(event.currentTarget.innerText));
        handleClose();
    }

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(ORDER_MODAL(false));
    }

    return (
        <article className="modal-group-order">
            <p>정렬기준</p>
            <div className="container-button">
                <button
                    type="button"
                    onClick={handleOrder}
                    className={`button-groupname-order ${orderStandard === '등록순' ? 'on' : ''}`}
                >
                    등록순
                </button>
                <button
                    type="button"
                    onClick={handleOrder}
                    className={`button-groupname-order ${orderStandard === '이름순' ? 'on' : ''}`}
                >
                    이름순
                </button>
            </div>
            <button type="button" className="button-close" onClick={handleClose}>
                <img src={closeImg} alt="X 아이콘" className="img-close" />
            </button>
        </article>
    );
}
