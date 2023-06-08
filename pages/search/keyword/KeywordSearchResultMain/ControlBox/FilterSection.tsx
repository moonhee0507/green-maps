import React from 'react';
import { CategoryFilter } from './CategoryFilter/CategoryFilter';
import { CertFilter } from './CertFilter/CertFilter';

export { FilterSection };

function FilterSection() {
    return (
        <section>
            <h3 className="sr-only" aria-label="필터" />
            <CategoryFilter />
            <CertFilter />
        </section>
    );
}
