import React from 'react';
import { CategoryFilter } from './CategoryFilter/CategoryFilter';
import { CertFilter } from './CertFilter/CertFilter';

export { FilterSection };

function FilterSection() {
    return (
        <section>
            <h3 className="h3-filter-sort">필터</h3>
            <CategoryFilter />
            <CertFilter />
        </section>
    );
}
