import React from 'react';
import { SearchInput } from './SearchInput/SearchInput';
import { SelectBox } from './SelectBox/SelectBox';

export { InputGroup };

function InputGroup(props: { keyword: string }) {
    const { keyword } = props;

    return (
        <>
            <SearchInput keyword={keyword} />
            <SelectBox />
        </>
    );
}
