import React from 'react';
import { GroupDetail } from './GroupDetail/GroupDetail';
import { BookmarkList } from './BookmarkList/BookmarkList';
import type { Bookmark, UserInfo } from '../../../../server/models/User';

export { BookmarkListMain };

function BookmarkListMain({ info, lists }: { info: UserInfo | null; lists: Bookmark[] }) {
    return (
        <main className="main-bookmarklist">
            <GroupDetail count={lists.length} />
            <BookmarkList lists={lists} />
        </main>
    );
}
