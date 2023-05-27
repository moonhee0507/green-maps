import React, { useEffect, useState } from 'react';
import { TopBar } from '../../../components/topBar/topBar';
import { PageContext } from '../../../renderer/types';
import { Create } from '../create/component/Create';
import { API_URL } from '../../API_URL/api';
import { Post } from '../../../server/models/Post';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { EDIT_MODE } from '../../../renderer/_reducers/_slices/postSlice';

export { Page };

function Page(pageContext: PageContext) {
    const dispatch = useAppDispatch();

    const { postId } = pageContext.routeParams as any;
    const [postInfo, setPostInfo] = useState<Post | null>(null);

    const [window, setWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindow(true);
        }

        (async () => {
            const res = await fetch(`${API_URL}/posts/${postId}`);
            const data = await res.json();
            setPostInfo(data);
        })();

        dispatch(EDIT_MODE(true));
    }, []);

    return (
        <>
            <TopBar title="글 수정" />
            {window && <Create postInfo={postInfo} />}
        </>
    );
}
