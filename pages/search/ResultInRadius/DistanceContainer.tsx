import React from 'react';
import { Distance } from '../../my-lists/bookmark/BookmarkListMain/BookmarkList/Distance';

export { DistanceContainer };

function DistanceContainer({ location }: { location: [number, number] }) {
    return (
        <div className="container-distance">
            <Distance location={location} />
        </div>
    );
}
