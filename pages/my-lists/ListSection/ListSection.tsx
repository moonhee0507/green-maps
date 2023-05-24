import React from 'react';
import { useAppSelector } from '../../../renderer/store/hooks';
import { BookmarkList } from './Bookmark/BookmarkList';
import { LikeList } from './Like/LikeList';
import type { UserInfo } from '../../../server/models/User';
import { BookmarkDetail } from './Bookmark/BookmarkDetail';
import { GroupList } from '../../../server/models/Bookmark';

export { ListSection };

function ListSection({ userInfo, groupList }: { userInfo: UserInfo | null; groupList: GroupList[] | null }) {
    const { bookmarkList, likeList } = userInfo as UserInfo;

    const clicked = useAppSelector((state) => state.myListSlice.clicked);

    return (
        <section className="section-mylists">
            <h3 className="sr-only">북마크 또는 좋아요한 식당 목록</h3>
            {clicked === '북마크' ? <BookmarkDetail lists={bookmarkList} groupList={groupList} /> : null}
            {clicked === '북마크' ? (
                <BookmarkList lists={bookmarkList} groupList={groupList} />
            ) : (
                <LikeList lists={likeList} />
            )}
        </section>
    );
}
