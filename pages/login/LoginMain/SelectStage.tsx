import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { LOGGING_IN } from '../../../renderer/_reducers/_slices/loginSlice';
import { Link } from '../../../renderer/Link';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import imgKakao from '/images/icon-kakao.webp';

export { SelectStage };

function SelectStage({ setMove }: { setMove: React.Dispatch<React.SetStateAction<number>> }) {
    const [popup, setPopup] = useState<Window | null>(null);

    const dispatch = useAppDispatch();

    const nextStage = () => {
        setMove(-100);
        dispatch(LOGGING_IN(true));
    };

    const callAgreementScreen = () => {
        const width = 500;
        const height = 700;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;

        const kakaoPopup = window.open(
            `${API_URL}/oauth/kakao`,
            'kakao_popup',
            `width=${width},height=${height},left=${left},top=${top}`
        );

        setPopup(kakaoPopup);
    };

    useEffect(() => {
        if (!popup) return;

        const timer = setInterval(() => {
            if (!popup) {
                timer && clearInterval(timer);

                return;
            }

            const popupUrl = popup.location.href;
            if (!popupUrl) return;

            const searchParams = new URL(popupUrl).searchParams;
            const authorizeCode = searchParams.get('code');

            if (authorizeCode) {
                popup.close();
                getAccessTokenFromKakao(authorizeCode).then((data) => {
                    if (data.success) {
                        getKakaoUserData().then((data) => {
                            if (data.success) {
                                window.location.href = '/my';
                            } else {
                                console.error(`카카오 사용자 데이터 가져오기 실패`);
                            }
                        });
                    } else {
                        console.error(`카카오 API 토큰 요청에 실패했습니다.`);
                    }
                });
            }
        }, 500);
    }, [popup]);

    async function getAccessTokenFromKakao(authorizeCode: string) {
        const res = await fetch(`${API_URL}/oauth/kakao/token?code=${authorizeCode}`, {
            credentials: 'include',
            method: 'GET',
        });
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
                <img src={imgKakao} alt="카카오 아이콘" role="presentation" />
                <span>카카오 로그인</span>
            </button>
            <Link href="/signup" className="link-to-signup">
                회원가입
            </Link>
        </section>
    );
}
