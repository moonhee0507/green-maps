import React from 'react';
import { BookmarkButton } from '../../../../../../components/button/BookmarkButton';
import { LikeButton } from '../../../../../../components/button/LikeButton';
import { ShareButton } from '../../../../../../components/button/ShareButton';

export { ButtonContainer };

function ButtonContainer(props: { restaurantId: string }) {
    return (
        <div className="container-button">
            <BookmarkButton restaurantId={props.restaurantId} />
            <LikeButton restaurantId={props.restaurantId} />
            <ShareButton />
        </div>
    );
}
