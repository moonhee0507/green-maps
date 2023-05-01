import React, { useEffect, useState, lazy, Suspense } from 'react';
import { EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export { TextArea };

function TextArea() {
    const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    useEffect(() => {
        const loadComponent = async () => {
            const module = await import('react-draft-wysiwyg');
            setComponent(() => module.Editor);
        };

        loadComponent();
    }, []);

    if (!Component) {
        return <Loading />;
    }

    // 글 적는 곳이 편집기(editor), 도구 있는 곳은 toolbar
    return (
        <Suspense fallback={<Loading />}>
            <Component
                editorState={editorState}
                onEditorStateChange={(newEditorState: EditorState) => setEditorState(newEditorState)} // editor의 상태가 바뀔때마다 호출
                toolbarHidden
            />
        </Suspense>
    );
}

function Loading() {
    return <div>에디터를 로딩하는 중입니다.</div>;
}
