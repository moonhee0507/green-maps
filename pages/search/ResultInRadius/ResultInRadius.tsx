import React from 'react';
import { CountMessage } from './CountMessage';
import { RestaurantList } from './RestaurantList';

export { ResultInRadius };

function ResultInRadius() {
    return (
        <div className="wrapper-result-in-radius">
            <CountMessage />
            <RestaurantList />
        </div>
    );
}
