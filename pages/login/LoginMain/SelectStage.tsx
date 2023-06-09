import React from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { LOGGING_IN } from '../../../renderer/_reducers/_slices/loginSlice';
import { Link } from '../../../renderer/Link';
import imgKakao from '/images/icon-kakao.png';

export { SelectStage };

function SelectStage({ setMove }: { setMove: React.Dispatch<React.SetStateAction<number>> }) {
    const dispatch = useAppDispatch();

    const nextStage = () => {
        setMove(-100);
        dispatch(LOGGING_IN(true));
    };
    return (
        <section className="login-select-stage">
            <h3 className="sr-only">로그인 방식 선택</h3>
            <div className="container-rocket">
                <span>🚀</span>
            </div>
            <button type="button" onClick={nextStage} className="styled-button reuse-in-login">
                로그인
            </button>
            <button type="button" className="styled-button kakao-login">
                <img src={imgKakao} alt="카카오 아이콘" />
                <span>카카오 로그인</span>
            </button>
            <Link href="/signup" className="link-to-signup">
                회원가입
            </Link>
        </section>
    );
}
