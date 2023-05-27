import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import {
    ADD_GROUP_MODAL,
    ORDER_MODAL,
    SET_GROUP_NAME,
    ICON_STANDARD,
    MOVE_LIST_MODAL,
    RESET_CHECKED,
    COPY_MODAL,
    RESET_RESTAURANT_LIST,
    DELETE_LIKELIST_MODAL,
    INCREASE_CHECKED,
    PUSH_RESTAURANT_LIST,
    DECREASE_CHECKED,
    DELETE_RESTAURANT_LIST,
} from '../../../renderer/_reducers/_slices/myListSlice';
import { GroupOrderModal } from './GroupOrderModal';
import { AddGroupModal } from './AddGroupModal/AddGroupModal';
import { MoveListModal } from './MoveListModal/MoveListModal';
import { WhereToCopyModal } from './WhereToCopyModal/WhereToCopyModal';
import type { Like, UserInfo } from '../../../server/models/User';

export function ModalGroup({ userInfo }: { userInfo: UserInfo | null }) {
    const on = useAppSelector(
        (state) =>
            state.myListSlice.orderModalOn ||
            state.myListSlice.addGroupModalOn ||
            state.myListSlice.moveListModalOn ||
            state.myListSlice.copyModalOn ||
            state.myListSlice.deleteLikeListModalOn
    );
    const [attr, setAttr] = useState({ hidden: true });

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (on === true) setAttr({ hidden: false });
        else setAttr({ hidden: true });
    }, [on]);

    useEffect(() => {
        if (attr.hidden === false) {
            document.addEventListener('click', handleClose);
        }

        return () => {
            document.removeEventListener('click', handleClose);
        };
    }, [attr]);

    function handleClose(event: any) {
        if (event.target.className === 'app modal-mode') {
            const app = document.querySelector('.app');
            app?.classList.remove('modal-mode');

            dispatch(ORDER_MODAL(false));
            dispatch(ADD_GROUP_MODAL(false));
            dispatch(MOVE_LIST_MODAL(false));
            dispatch(COPY_MODAL(false));
            dispatch(DELETE_LIKELIST_MODAL(false));

            // 새그룹추가 모달 인풋창 초기화
            dispatch(SET_GROUP_NAME(''));
            // 선택 아이콘 초기화
            dispatch(ICON_STANDARD('/images/icon-star.svg'));
            // 체크박스 카운트 초기화
            dispatch(RESET_CHECKED());
            // 체크된 식당의 Id 배열 초기화
            dispatch(RESET_RESTAURANT_LIST([]));
        }
    }

    return (
        <div className="mylist-modal-group" {...attr}>
            <GroupOrderModal />
            <AddGroupModal userInfo={userInfo} />
            <MoveListModal userInfo={userInfo} />
            <WhereToCopyModal userInfo={userInfo} />
            <DeleteMultiLike userInfo={userInfo} />
        </div>
    );
}

function DeleteMultiLike({ userInfo }: { userInfo: UserInfo | null }) {
    const [attr, setAttr] = useState({ hidden: true });
    const [likeList, setLikeList] = useState<Like[]>([]);

    const deleteLikeListModelOn = useAppSelector((state) => state.myListSlice.deleteLikeListModalOn);

    useEffect(() => {
        if (deleteLikeListModelOn) setAttr({ hidden: false });
        else setAttr({ hidden: true });
    }, [deleteLikeListModelOn]);

    useEffect(() => {
        if (userInfo !== null) {
            setLikeList(userInfo.likeList);
        }
    }, [userInfo]);

    return (
        <article className="modal-likelist-delete" {...attr}>
            <h4>목록 삭제</h4>
            <Form likeList={likeList} />
            <CloseButton />
        </article>
    );
}

function Form({ likeList }: { likeList: Like[] }) {
    return (
        <form>
            <List likeList={likeList} />
            <ButtonGroup />
        </form>
    );
}

import imgClose from '/images/icon-plus.svg';
import { API_URL } from '../../API_URL/api';

function CloseButton() {
    const dispatch = useAppDispatch();

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(DELETE_LIKELIST_MODAL(false));
        dispatch(RESET_CHECKED());
        dispatch(RESET_RESTAURANT_LIST([]));
    }

    return (
        <button type="button" className="button-close" onClick={handleClose}>
            <img src={imgClose} alt="X 아이콘" className="img-close" />
        </button>
    );
}

// ##############################################################################################

function List({ likeList }: { likeList: Like[] }) {
    return (
        <div>
            {likeList.length > 0 ? (
                likeList.map((list) => {
                    return <ListItem key={Math.random()} list={list} />;
                })
            ) : (
                <div className="style-wrapper-no-review">
                    <div className="txt-no-review">😭</div>
                    <p>목록이 없어요.</p>
                </div>
            )}
        </div>
    );
}

function ListItem({ list }: { list: Like }) {
    const dispatch = useAppDispatch();

    const { _id, title, address, category } = list;
    const [isChecked, setIsChecked] = useState(false);
    const restaurantToDelete = useAppSelector((state) => state.myListSlice.restaurantToMove);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);

        if (event.target.checked) {
            dispatch(INCREASE_CHECKED(1));
            dispatch(PUSH_RESTAURANT_LIST([...restaurantToDelete, _id]));
        } else {
            dispatch(DECREASE_CHECKED(1));
            const newArray = [...restaurantToDelete];
            const index = newArray.indexOf(_id);
            newArray.splice(index, 1);
            dispatch(DELETE_RESTAURANT_LIST(newArray));
        }
    };

    return (
        <label className="label-bookmarklist">
            <input
                type="checkbox"
                className="checkbox-bookmarklist"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div className="wrapper-bookmarklist-edit">
                <dl>
                    <dl className="container-title-category">
                        <dt className="sr-only">식당 이름</dt>
                        <dd className="txt-title">{title}</dd>
                        <dt className="sr-only">업종</dt>
                        <dd className="txt-category">{category}</dd>
                    </dl>
                    <dl>
                        <dt className="sr-only">주소</dt>
                        <dd className="txt-address">{address}</dd>
                    </dl>
                </dl>
            </div>
        </label>
    );
}

function ButtonGroup() {
    const dispatch = useAppDispatch();
    const countChecked = useAppSelector((state) => state.myListSlice.countChecked);
    const restaurantToDelete = useAppSelector((state) => state.myListSlice.restaurantToMove);

    async function handleDelete() {
        if (restaurantToDelete.length > 0) {
            const deletePromise = restaurantToDelete.map((item) => deleteLikeList(item));

            try {
                // Promise.all은 deletePromise 배열 내 모든 값의 fulfill 혹은 첫 reject를 기다린다.
                const result = await Promise.all(deletePromise);

                result.forEach((_, i) => {
                    if (i === result.length - 1) window.location.reload();
                });
            } catch (err) {
                console.error('삭제 중 오류가 발생했습니다.', err);
            }
        }
    }

    async function deleteLikeList(id: string) {
        const res = await fetch(`${API_URL}/users/like/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json();

        return data;
    }

    function clearCheckbox() {
        dispatch(RESET_CHECKED()); // 체크박스 해제
        dispatch(RESET_RESTAURANT_LIST([])); // 리스트 비우기
    }

    return (
        <div className="container-button-move like">
            <button type="reset" onClick={clearCheckbox}>
                선택 해제
            </button>
            <button type="button" disabled={countChecked ? false : true} onClick={handleDelete}>
                <span className="txt-copy-del">삭제</span>
                <span>{countChecked}</span>
            </button>
        </div>
    );
}
