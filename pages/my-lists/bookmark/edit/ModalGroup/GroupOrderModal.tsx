import React, { useEffect, useState } from 'react';
import closeImg from '/images/icon-plus.svg';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import { ORDER_MODAL, ORDER_STANDARD } from '../../../../../renderer/_reducers/_slices/myListSlice';

export { GroupOrderModal };

function GroupOrderModal() {
    const dispatch = useAppDispatch();
    const orderStandard = useAppSelector((state) => state.myListSlice.groupNameOrder);
    const orderModalOn = useAppSelector((state) => state.myListSlice.orderModalOn);
    const [attr, setAttr] = useState({ hidden: true });

    useEffect(() => {
        if (orderModalOn === true) setAttr({ hidden: false });
        else setAttr({ hidden: true });
    }, [orderModalOn]);

    function handleOrder(event: React.MouseEvent<HTMLButtonElement>) {
        dispatch(ORDER_STANDARD(event.currentTarget.innerText));
        handleClose();
    }

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(ORDER_MODAL(false));
    }

    return (
        <article className="modal-group-order" {...attr}>
            <h4>정렬기준</h4>
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
