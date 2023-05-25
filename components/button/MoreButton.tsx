import React, { useEffect, useState } from 'react';
import { API_URL } from '../../pages/API_URL/api';

export { MoreButton };

function MoreButton({ restaurantId, restaurantTitle }: { restaurantId: string; restaurantTitle: string }) {
    const [show, setShow] = useState(false);

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

        if (target.className !== 'button-more' && target.className !== 'txt-delete') {
            setShow(false);
        }
    }

    async function handleDelete() {
        try {
            if (confirm('해당 식당을 삭제하시겠습니까?')) {
                const res = await fetch(`${API_URL}/users/bookmark/${restaurantId}`, {
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
            <button type="button" aria-label="더보기 버튼" className="button-more" onClick={handleMoreButton} />
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
