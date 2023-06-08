import React from 'react';
import { FilterSection } from './FilterSection';
import { SortSection } from './SortSection';

export { ControlBox };

function ControlBox() {
    return (
        <div>
            <FilterSection />
            <SortSection />
        </div>
    );
}
