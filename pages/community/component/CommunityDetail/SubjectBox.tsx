import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import type { Post } from '../../../../server/models/Post';
import { useCheckLoginStatus } from '../../../../renderer/_hooks/useCheckLoginStatus';

export { SubjectBox };

function SubjectBox({ postInfo }: { postInfo?: Post | null }) {
    const dispatch = useAppDispatch();

    const [isAdmin, setIsAdmin] = useState(false);
    const [currentPath, setCurrentPath] = useState<string>('');
    const editMode = useAppSelector((state) => state.postSlice.editMode);
    const subject = useAppSelector((state) => state.postSlice.SUBJECT);
    const [isFocused, setIsFocused] = useState(false);

    const [_, userInfo] = useCheckLoginStatus();
    useEffect(() => {
        setCurrentPath(window.location.pathname);
        if (userInfo !== null) {
            setIsAdmin(userInfo.role === 9);
        } else setIsAdmin(false);
    }, []);

    useEffect(() => {
        if (postInfo !== null && postInfo !== undefined) {
            dispatch({ type: 'postSlice/SUBJECT_STATE', SUBJECT: postInfo.subject });
        } else {
            dispatch({ type: 'postSlice/SUBJECT_STATE', SUBJECT: '' });
        }
    }, [postInfo]);

    useEffect(() => {
        console.log('isAdmin', isAdmin);
        console.log('currentPath', currentPath);
    }, [isAdmin, currentPath, subject, isFocused]);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        dispatch({ type: 'postSlice/SUBJECT_STATE', SUBJECT: event.target.value });

        // 말머리 변경 시 현재 페이지 초기화
        dispatch({
            type: 'postSlice/POST_IN_PAGE',
            TOTAL: 0, // 최상단에서 최종 결정됨
            CURRENT_PAGE: 1,
        });

        console.log('event.currentTarget.focus', event.currentTarget.focus);

        return event.target.value;
    }

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div
            className={`${currentPath === '/community' ? 'wrapper-subject' : 'wrapper-subject create'} ${
                isFocused ? 'on' : ''
            }`}
        >
            <label htmlFor="selectSubject" className={currentPath === '/community' ? '' : 'sr-only'}>
                말머리
            </label>
            <select
                name="subjects"
                id="selectSubject"
                onChange={handleChange}
                value={subject}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                <option value="">{currentPath === '/community' ? '-- 전체 --' : '말머리 선택'}</option>
                {currentPath === '/community/create' && isAdmin ? <option value="공지사항">공지사항</option> : null}
                <option value="🥑채식얘기">🥑채식얘기</option>
                <option value="⚽운동얘기">⚽운동얘기</option>
            </select>
        </div>
    );
}
