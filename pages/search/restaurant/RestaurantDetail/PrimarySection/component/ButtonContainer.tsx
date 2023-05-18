import React from 'react';
import { BookmarkButton } from '../../../../../../components/button/BookmarkButton';
import { LikeButton } from '../../../../../../components/button/LikeButton';
import { ShareButton } from '../../../../../../components/button/ShareButton';

export { ButtonContainer };

function ButtonContainer({ restaurantId, isLoggedIn }: { restaurantId: string; isLoggedIn: boolean }) {
    return (
        <div className="container-bookmark-like-share">
            <BookmarkButton restaurantId={restaurantId} isLoggedIn={isLoggedIn} />
            <LikeButton restaurantId={restaurantId} isLoggedIn={isLoggedIn} />
            <ShareButton />
        </div>
    );
}
