import React, { useEffect, useState, Suspense } from 'react';
import { EditorState, convertToRaw, convertFromHTML, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import toolbar from './toolbar';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../../renderer/store/hooks';
import type { Post } from '../../../../../server/models/Post';

export { TextEditor };

function TextEditor({ postInfo }: { postInfo?: Post | null }) {
    const dispatch = useDispatch();

    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    const editMode = useAppSelector((state) => state.postSlice.editMode);

    useEffect(() => {
        const loadComponent = async () => {
            const module = await import('react-draft-wysiwyg');
            setComponent(() => module.Editor);
        };

        loadComponent();
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (postInfo !== null && postInfo !== undefined) {
            /**
             * @convertFromHTML HTML 문자열을 객체(2개의 키)로 반환. 하나는 ContentBlock 객체의 배열을 가지고, 다른 하나는 entityMap에 대한 참조를 갖는다
             * @createFromBlockArray ContentBlock 객체의 배열에서 ContentState 생성.
             */
            dispatch({ type: 'postSlice/CONTENT_STATE', CONTENT: postInfo.content });
            const blocksFromHTML = convertFromHTML(postInfo.content); // HTML을 배열로 만들고
            const state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap); // 그 배열로 ContentState를 생성한다.
            setEditorState(EditorState.createWithContent(state));
        } else {
            setEditorState(EditorState.createEmpty());
        }
    }, [isMounted, postInfo]);

    const handleChange = (newEditorState: EditorState) => {
        if (isMounted) {
            setEditorState(newEditorState);
            dispatch({
                type: 'postSlice/CONTENT_STATE',
                CONTENT: draftToHtml(convertToRaw(newEditorState.getCurrentContent())),
            });
        }
    };

    if (!Component) {
        return <Loading />;
    }

    return (
        <Suspense fallback={<Loading />}>
            <Component editorState={editorState} onEditorStateChange={handleChange} toolbar={toolbar} />
        </Suspense>
    );
}

function Loading() {
    return <div>텍스트 에디터 로드 중</div>;
}
