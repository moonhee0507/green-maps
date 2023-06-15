import React from 'react';
import { GroupDetail } from './GroupDetail/GroupDetail';
import { BookmarkList } from './BookmarkList/BookmarkList';
import type { Bookmark, UserInfo } from '../../../../server/models/User';

export default function BookmarkListMain({
    info,
    lists,
    groupName,
}: {
    info: UserInfo | null;
    lists: Bookmark[];
    groupName: string;
}) {
    return (
        <main className="main-bookmarklist">
            <GroupDetail lists={lists} groupName={groupName} />
            <BookmarkList lists={lists} />
        </main>
    );
}
