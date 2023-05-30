import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../renderer/store/hooks';
import { API_URL } from '../../../API_URL/api';
import isEmptyString from '../../../../components/validate/isEmptyString';

export { SubmitButton };

function SubmitButton() {
    // 중복 체크, 정규표현식 체크 후 버튼상태 처리
    const prevNickName = useAppSelector((state) => state.profileSlice.prevNickName);
    const nextNickName = useAppSelector((state) => state.profileSlice.nextNickName);

    const [duplicate, setDuplicate] = useState(true);
    const [validString, setValidString] = useState(false);

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        checkDuplicate(nextNickName);
        checkString(nextNickName);
    }, [nextNickName]);

    useEffect(() => {
        if (prevNickName !== nextNickName) {
            if (duplicate === false && validString === true) {
                setDisabled(false);
            } else {
                setDisabled(true);
            }
        } else {
            setDisabled(true);
        }
    }, [duplicate, validString]);

    async function checkDuplicate(nickName: string) {
        const res = await fetch(`${API_URL}/users/check-nickname?nickname=${nickName}`);
        const data = await res.json();

        setDuplicate(data.duplicated);

        return data;
    }

    function checkString(nickName: string) {
        const regex = /^[ㄱ-힣a-zA-Z0-9\s]{1,17}$/g;

        if (regex.test(nickName) && !isEmptyString(nickName)) {
            setValidString(true);
        } else {
            setValidString(false);
        }
    }

    const handleSubmit = () => {
        // trim한 결과에 대해서 다시 중복체크
        let nickname = nextNickName.trim();

        checkDuplicate(nickname).then((data) => {
            if (data.duplicated === true) {
                alert('닉네임 양옆 띄어쓰기를 제외하고 입력해주세요.');
            } else {
                editNickName(nickname);
            }
        });
    };

    async function editNickName(nickName: string) {
        try {
            const res = await fetch(`${API_URL}/users/edit/profile`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nickname: nickName }),
            });

            const data = await res.json();

            if (data.success) {
                window.location.reload();
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <button type="button" className="styled-button nickName" disabled={disabled} onClick={handleSubmit}>
            {(() => {
                if (duplicate) {
                    return '이미 존재하는 닉네임입니다.';
                } else if (!validString) {
                    return '올바른 닉네임을 입력하세요.';
                } else {
                    return '완료';
                }
            })()}
        </button>
    );
}
