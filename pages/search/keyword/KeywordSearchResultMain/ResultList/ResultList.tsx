import React, { useCallback } from 'react';
import { RestaurantListItem } from '../../../ResultInRadius/RestaurantListItem';
import { Pagination } from '../../../../../components/Pagination/Pagination';
import type { Restaurant } from '../../../../../server/models/Restaurant';
import LoadingMain from '../../../../../components/Loading/LoadingMain';

export { ResultList };

function ResultList({
    total,
    perPage,
    searchListInPage,
}: {
    total: number | null;
    perPage: number;
    searchListInPage: Restaurant[];
}) {
    const showResults = useCallback(({ exist }: { exist: boolean }) => {
        if (!exist) {
            return (
                <div className="style-wrapper-no-review">
                    <div className="txt-no-review">😭</div>
                    <p>검색 결과가 없어요.</p>
                </div>
            )
        }

        return (
            <>
                <RestaurantList searchListInPage={searchListInPage} />
                <Pagination count={total ?? 0} perPage={perPage} />
            </>
        )
    }, [total, searchListInPage, perPage]);

    return (
        <div className="wrapper-result-in-radius reuse-in-search">
            <p>검색 결과({total})</p>
            {
                total === null ? <LoadingMain /> : showResults({ exist: total !== 0 })
            }
        </div>
    );
}

function RestaurantList({ searchListInPage }: { searchListInPage: Restaurant[] }) {
    return (
        <ul className="ul-restaurant-in-radius reuse-in-search">
            {searchListInPage.map((restaurantInfo, i) => {
                return <RestaurantListItem key={restaurantInfo._id} restaurantInfo={restaurantInfo} isFirst={i === 0} />;
            })}
        </ul>
    );
}
