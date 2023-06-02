import React, { useEffect, useRef, useState } from 'react';
import { API_URL } from '../../pages/CONSTANT_URL';
import { useAppSelector } from '../../renderer/store/hooks';

export { MoreButton };

function MoreButton({ restaurantId, restaurantTitle }: { restaurantId: string; restaurantTitle: string }) {
    const [show, setShow] = useState(false);
    const moreButtonRef = useRef<HTMLButtonElement>(null);

    const clicked = useAppSelector((state) => state.myListSlice.clicked);

    function handleMoreButton() {
        setShow((prev) => !prev);
    }

    useEffect(() => {
        if (show) {
            window.addEventListener('click', clickOutside);
        }

        return () => {
            window.addEventListener('click', clickOutside);
        };
    }, [show]);

    function clickOutside(event: MouseEvent) {
        const target = event.target as HTMLElement;

        if (moreButtonRef.current && !moreButtonRef.current.contains(target)) {
            setShow(false);
        }
    }

    async function handleDelete() {
        try {
            const list = clicked === '북마크' ? 'bookmark' : 'like';

            if (confirm('해당 식당을 삭제하시겠습니까?')) {
                const res = await fetch(`${API_URL}/users/${list}/${restaurantId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await res.json();

                if (data.success) {
                    alert(`${restaurantTitle} 삭제가 완료되었습니다.`);
                    window.location.reload();
                } else {
                    alert('다시 시도해주세요.');
                }
            } else {
                setShow(false);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <button
                type="button"
                aria-label="더보기 버튼"
                className="button-more"
                onClick={handleMoreButton}
                ref={moreButtonRef}
            />
            {show && (
                <div className="container-more-option">
                    <ul>
                        <li className="list-option" onClick={handleDelete}>
                            <div>
                                <p className="txt-delete">삭제</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
