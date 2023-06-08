import React from 'react';
import { ControlBox } from './ControlBox/ControlBox';
import { ResultList } from './ResultList/ResultList';
import type { Restaurant } from '../../../../server/models/Restaurant';

export { KeywordSearchResultMain };

function KeywordSearchResultMain({
    keyword,
    total,
    perPage,
    searchListInPage,
}: {
    keyword: string;
    total: number;
    perPage: number;
    searchListInPage: Restaurant[];
}) {
    return (
        <main className="main-search-result">
            <ControlBox />
            <ResultList total={total} perPage={perPage} searchListInPage={searchListInPage} />
        </main>
    );
}
