import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import {
    PASS_CURRENT_PASSWORD,
    PROFILE_PASSWORD_MODAL,
    SET_USERID,
} from '../../../../renderer/_reducers/_slices/profileSlice';
import imgClose from '/images/icon-plus.svg';
import { API_URL } from '../../../API_URL/api';
import { validatePassword } from '../../../../components/validate/regex';
import { navigate } from 'vite-plugin-ssr/client/router';

export { EditPasswordModal };

function EditPasswordModal() {
    const dispatch = useAppDispatch();

    const [show, setShow] = useState(false);
    const profilePasswordModalOn = useAppSelector((state) => state.profileSlice.profilePasswordModalOn);
    const passCurrentPassword = useAppSelector((state) => state.profileSlice.passCurrentPassword);

    useEffect(() => {
        if (profilePasswordModalOn === true) setShow(true);
        else setShow(false);
    }, [profilePasswordModalOn]);

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(PROFILE_PASSWORD_MODAL(false));
        dispatch(PASS_CURRENT_PASSWORD(false));
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>비밀번호 재설정</h4>
            {passCurrentPassword ? <NewPassword /> : <CurrentPassword />}
            <button type="button" className="button-close" onClick={handleClose}>
                <img src={imgClose} alt="X 아이콘" className="img-close" />
            </button>
        </article>
    );
}

function CurrentPassword() {
    const dispatch = useAppDispatch();

    const userId = useAppSelector((state) => state.profileSlice.userId);
    const inputElement = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        setValue(target.value);
    };

    const handleClick = async () => {
        const res = await fetch(`${API_URL}/users/check-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: value }),
        });

        const data = await res.json();

        console.log(data);
        if (data.success) {
            dispatch(PASS_CURRENT_PASSWORD(true));
        } else {
            dispatch(PASS_CURRENT_PASSWORD(false));
        }
    };

    return (
        <>
            <form onSubmit={(event: React.FormEvent) => event.preventDefault()}>
                <p>그린맵 계정의 현재 비밀번호를 확인해주세요.</p>
                <label htmlFor="userId" className="sr-only">
                    아이디
                </label>
                <input type="text" id="userId" readOnly={true} defaultValue={userId} />
                <label htmlFor="prevPassword">현재 비밀번호</label>
                <input type="password" id="prevPassword" onChange={handleChange} ref={inputElement} value={value} />
            </form>
            <button type="button" onClick={handleClick}>
                완료
            </button>
        </>
    );
}

function NewPassword() {
    // 비밀번호가 동일한지 확인
    // regex 확인
    // 전송

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
        }
    };

    return (
        <>
            <form>
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
