import React, { useEffect, useState, lazy, Suspense } from 'react';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import toolbar from './toolbar';

export { TextArea };

function TextArea() {
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

    const handleChange = (newEditorState: EditorState) => {
        if (isMounted) {
            setEditorState(newEditorState);
        }
    };

    if (!Component) {
        return <Loading />;
    }

    // 글 적는 곳이 편집기(editor), 도구 있는 곳은 toolbar
    return (
        <Suspense fallback={<Loading />}>
            <Component editorState={editorState} onEditorStateChange={handleChange} toolbar={toolbar} />
        </Suspense>
    );
}

function Loading() {
    return <div>텍스트 에디터 로드 중</div>;
}
