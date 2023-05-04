import React, { useEffect, useState, Suspense } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import draftToMarkdown from 'draftjs-to-markdown';

export { TextArea };

function TextArea(props: { content: string }) {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    useEffect(() => {
        const loadComponent = async () => {
            const module = await import('react-draft-wysiwyg');
            setComponent(() => module.Editor);
        };

        loadComponent();
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const contentState = stateFromHTML(props.content);
        const editorState = EditorState.createWithContent(contentState);

        setEditorState(editorState);
    }, [props.content]);

    if (!Component) {
        return <Loading />;
    }

    return (
        <Suspense fallback={<Loading />}>
            <Component editorState={editorState} toolbarHidden editorClassName="wysiwyg-readonly" />
            {/* <textarea
                disabled
                value={editorState && draftToMarkdown(convertFromRaw(convertToRaw(editorState.getCurrentContent())))}
            /> */}
        </Suspense>
    );
}

function Loading() {
    return <div>텍스트 에디터 로드 중</div>;
}
