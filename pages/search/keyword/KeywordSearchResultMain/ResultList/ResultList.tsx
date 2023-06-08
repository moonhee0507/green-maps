import React from 'react';
import { RestaurantListItem } from '../../../ResultInRadius/RestaurantListItem';
import { Pagination } from '../../../../../components/Pagination/Pagination';
import type { Restaurant } from '../../../../../server/models/Restaurant';

export { ResultList };

function ResultList({
    total,
    perPage,
    searchListInPage,
}: {
    total: number;
    perPage: number;
    searchListInPage: Restaurant[];
}) {
    return (
        <div className="wrapper-result-in-radius reuse-in-search">
            <p>검색 결과({total})</p>
            {searchListInPage.length > 0 ? (
                <>
                    <RestaurantList searchListInPage={searchListInPage} />
                    <Pagination count={total} perPage={perPage} />
                </>
            ) : (
                <div className="style-wrapper-no-review">
                    <div className="txt-no-review">😭</div>
                    <p>검색 결과가 없어요.</p>
                </div>
            )}
        </div>
    );
}

function RestaurantList({ searchListInPage }: { searchListInPage: Restaurant[] }) {
    return (
        <ul className="ul-restaurant-in-radius reuse-in-search">
            {searchListInPage.map((restaurantInfo, i) => {
                return <RestaurantListItem key={Math.random()} restaurantInfo={restaurantInfo} isFirst={i === 0} />;
            })}
        </ul>
    );
}
