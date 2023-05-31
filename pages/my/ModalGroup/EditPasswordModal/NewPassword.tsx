import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../renderer/store/hooks';
import { validatePassword } from '../../../../components/validate/regex';
import { API_URL } from '../../../API_URL/api';
import {
    PASS_CURRENT_PASSWORD,
    PROFILE_PASSWORD_MODAL,
    SET_USERID,
} from '../../../../renderer/_reducers/_slices/profileSlice';
import { navigate } from 'vite-plugin-ssr/client/router';

export { NewPassword };

function NewPassword() {
    const dispatch = useAppDispatch();

    const [disabled, setDisabled] = useState(true);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const [isSame, setIsSame] = useState(false);
    const [validateString, setValidateString] = useState(false);

    useEffect(() => {
        if (value1 === value2) {
            setIsSame(true);
            if (validatePassword(value1)) {
                setValidateString(true);
            } else {
                setValidateString(false);
            }
        } else {
            setIsSame(false);
            setValidateString(false);
        }
    }, [value1, value2]);

    useEffect(() => {
        if (isSame && validateString) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [isSame, validateString]);

    const handleChangePW1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        setValue1(target.value);
    };

    const handleChangePW2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        setValue2(target.value);
    };

    const handleClick = async () => {
        try {
            const res = await fetch(`${API_URL}/users/edit/password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: value1 }),
            });

            const data = await res.json();

            if (data.success) {
                const res = await fetch(`${API_URL}/users/logout`, {
                    method: 'POST',
                });

                const data = await res.json();

                if (data.success) {
                    navigate('/login');
                } else {
                    alert('다시 시도해주세요.');
                }
            } else {
                alert('다시 시도해주세요.');
            }
        } catch (err) {
            console.error(err);
        } finally {
            dispatch(PROFILE_PASSWORD_MODAL(false));
            dispatch(PASS_CURRENT_PASSWORD(false));
            dispatch(SET_USERID(''));

            // 페이지 전환때문에 모달그룹이 사라져서 직접 수정
            const app = document.querySelector('.app');
            app?.classList.remove('modal-mode');
        }
    };

    return (
        <>
            <form onSubmit={(event: React.FormEvent) => event.preventDefault()}>
                <p>새로운 비밀번호를 입력해주세요.</p>
                <em>영문, 숫자, 특수문자(!@#$%^&*-+_=?)를 모두 사용하여 최소 8자리 이상 필수</em>
                <label htmlFor="nextPassword">비밀번호</label>
                <input type="password" id="nextPassword" onChange={handleChangePW1} />
                <label htmlFor="confirmNextPassword">비밀번호 재입력</label>
                <input type="password" id="confirmNextPassword" onChange={handleChangePW2} />
            </form>
            <button type="button" onClick={handleClick} disabled={disabled}>
                {(() => {
                    if (!isSame) {
                        return '두 비밀번호가 일치하지 않습니다.';
                    } else if (!validateString) {
                        return '비밀번호 구성을 확인해주세요.';
                    } else {
                        return '완료';
                    }
                })()}
            </button>
        </>
    );
}
