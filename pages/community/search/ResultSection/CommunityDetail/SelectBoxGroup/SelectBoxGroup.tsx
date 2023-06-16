import React from 'react';
import { BoundaryBox } from './BoundaryBox';
import { OrderByBox } from './OrderByBox';

export { SelectBoxGroup };

function SelectBoxGroup() {
    return (
        <div className="wrapper-selectbox-in-result">
            <BoundaryBox />
            <OrderByBox />
        </div>
    );
}
