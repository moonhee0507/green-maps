import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import {
    COPY_MODAL,
    MOVE_LIST_MODAL,
    RESET_CHECKED,
    RESET_RESTAURANT_LIST,
} from '../../../../../renderer/_reducers/_slices/myListSlice';
import { API_URL } from '../../../../../renderer/CONSTANT_URL';

export { ButtonGroup };

function ButtonGroup() {
    const dispatch = useAppDispatch();
    const countChecked = useAppSelector((state) => state.myListSlice.countChecked);
    const restaurantToDelete = useAppSelector((state) => state.myListSlice.restaurantToMove);

    function handleCopy() {
        dispatch(MOVE_LIST_MODAL(false));
        dispatch(COPY_MODAL(true));
    }

    async function handleDelete() {
        if (restaurantToDelete.length > 0) {
            const deletePromise = restaurantToDelete.map((item) => deleteBookmarks(item));

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

    async function deleteBookmarks(id: string) {
        const res = await fetch(`${API_URL}/users/bookmark/${id}`, {
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
        <div className="container-button-move">
            <button type="reset" onClick={clearCheckbox}>
                선택 해제
            </button>
            <button type="button" onClick={handleCopy} disabled={countChecked ? false : true}>
                <span className="txt-copy-del">복사</span>
                <span>{countChecked}</span>
            </button>
            <button type="button" disabled={countChecked ? false : true} onClick={handleDelete}>
                <span className="txt-copy-del">삭제</span>
                <span>{countChecked}</span>
            </button>
        </div>
    );
}
