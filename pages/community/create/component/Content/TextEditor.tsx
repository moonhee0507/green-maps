import React, { useEffect, useState, Suspense } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import toolbar from './toolbar';
import { useDispatch } from 'react-redux';

export { TextEditor };

function TextEditor() {
    const dispatch = useDispatch();

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
