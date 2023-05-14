import React from 'react';
import { SearchInput } from './SearchInput/SearchInput';
import { SelectBox } from './SelectBox/SelectBox';

export { InputGroup };

function InputGroup() {
    return (
        <div>
            <SearchInput />
            <SelectBox />
        </div>
    );
}
