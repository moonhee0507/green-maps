import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../renderer/store/hooks';
import { validatePassword } from '../../../../components/validate/regex';
import { API_URL } from '../../../CONSTANT_URL';
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
                    alert('비밀번호가 변경되었습니다.\n로그인 페이지로 이동합니다.');
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
            <form onSubmit={(event: React.FormEvent) => event.preventDefault()} className="form-new-password">
                <p className="txt-notice">새로운 비밀번호를 입력해주세요.</p>
                <div className="container-notice password">
                    <em>영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)</em>
                </div>
                <label htmlFor="nextPassword" className="sr-only">
                    비밀번호
                </label>
                <input type="password" id="nextPassword" onChange={handleChangePW1} placeholder="비밀번호" />
                <label htmlFor="confirmNextPassword" className="sr-only">
                    비밀번호 재입력
                </label>
                <input
                    type="password"
                    id="confirmNextPassword"
                    onChange={handleChangePW2}
                    placeholder="비밀번호 재입력"
                    minLength={8}
                    maxLength={32}
                />
            </form>
            <button type="button" onClick={handleClick} disabled={disabled} className="styled-button thin">
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
