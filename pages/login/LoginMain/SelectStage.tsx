import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { LOGGING_IN } from '../../../renderer/_reducers/_slices/loginSlice';
import { Link } from '../../../renderer/Link';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import { navigate } from 'vite-plugin-ssr/client/router';
import imgKakao from '/images/icon-kakao.png';

export { SelectStage };

function SelectStage({ setMove }: { setMove: React.Dispatch<React.SetStateAction<number>> }) {
    const dispatch = useAppDispatch();

    const nextStage = () => {
        setMove(-100);
        dispatch(LOGGING_IN(true));
    };

    async function callAgreementScreen() {
        // 카카오 로그인 페이지
        window.location.href = `${API_URL}/oauth/kakao`;
    }

    useEffect(() => {
        const queryString = window.location.search;
        const paramFromQueryString = new URLSearchParams(queryString); // 쿼리 문자열을 메서드로 처리할 수 있음
        const authorizeCode = paramFromQueryString.get('code');

        if (authorizeCode) {
            getAccessTokenFromKakao(authorizeCode).then((data) => {
                if (data.success) {
                    getKakaoUserData().then((data) => {
                        if (data.success) {
                            window.location.href = '/my';
                        }
                    });
                }
            });
        }
    }, []);

    async function getAccessTokenFromKakao(authorizeCode: string) {
        const res = await fetch(`${API_URL}/oauth/kakao/token?code=${authorizeCode}`);
        const data = await res.json();

        return data;
    }

    async function getKakaoUserData() {
        const res = await fetch(`${API_URL}/oauth/kakao/users`, {
            credentials: 'include',
            method: 'GET',
        });
        const data = await res.json();

        return data;
    }

    return (
        <section className="login-select-stage">
            <h3 className="sr-only">로그인 방식 선택</h3>
            <div className="container-rocket">
                <span>🚀</span>
            </div>
            <button type="button" onClick={nextStage} className="styled-button reuse-in-login">
                로그인
            </button>
            <button type="button" className="styled-button kakao-login" onClick={callAgreementScreen}>
                <img src={imgKakao} alt="카카오 아이콘" />
                <span>카카오 로그인</span>
            </button>
            <Link href="/signup" className="link-to-signup">
                회원가입
            </Link>
        </section>
    );
}
