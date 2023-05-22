import React from 'react';
import { useAppSelector } from '../../../renderer/store/hooks';
import { BookmarkList } from './Bookmark/BookmarkList';
import { LikeList } from './Like/LikeList';
import type { UserInfo } from '../../../server/models/User';
import { BookmarkDetail } from './Bookmark/BookmarkDetail';

export { ListSection };

function ListSection({ userInfo }: { userInfo: UserInfo | null }) {
    const { bookmarkList, likeList } = userInfo as UserInfo;

    const clicked = useAppSelector((state) => state.myListSlice.clicked);

    return (
        <section className="section-mylists">
            <h3 className="sr-only">북마크 또는 좋아요한 식당 목록</h3>
            {clicked === '북마크' ? <BookmarkDetail lists={bookmarkList} /> : null}
            {clicked === '북마크' ? <BookmarkList lists={bookmarkList} /> : <LikeList lists={likeList} />}
        </section>
    );
}
