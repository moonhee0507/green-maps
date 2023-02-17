import React from 'react';
import { ButtonGoBack } from '../../components/button/buttonGoBack';
import { SearchForm } from './searchForm';

export { SearchBar };

function SearchBar() {
    return (
        <div className="top-bar search">
            <ButtonGoBack />
            <SearchForm />
        </div>
    );
}
