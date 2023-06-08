import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../../../renderer/store/hooks';
import { SET_ORDER_BY } from '../../../../../renderer/_reducers/_slices/mapSlice';

export { SortSection };

function SortSection() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // 정렬방식 초기화
        dispatch(SET_ORDER_BY('relevance'));
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(SET_ORDER_BY(event.target.value as 'relevance' | 'rating' | 'review' | 'distance'));
    };

    return (
        <section>
            <h3 className="h3-filter-sort">정렬</h3>
            <form>
                <label htmlFor="selectBoxSortInSearch">정렬방식</label>
                <select name="" id="selectBoxSortInSearch" onChange={handleChange}>
                    <option value="relevance">관련도</option>
                    <option value="rating">별점순</option>
                    <option value="review">리뷰순</option>
                    <option value="distance">거리순</option>
                </select>
            </form>
        </section>
    );
}
