import React from 'react';
import { Link } from '../../../renderer/Link';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { SIGNING_UP } from '../../../renderer/_reducers/_slices/signupSlice';

export { InfoStage };

function InfoStage({ move, setMove }: { move: number; setMove: React.Dispatch<React.SetStateAction<number>> }) {
    const dispatch = useAppDispatch();

    const nextStage = () => {
        setMove(-100);
        dispatch(SIGNING_UP(true));
    };

    return (
        <section className="login-select-stage reuse-in-signup" style={move !== 0 ? { visibility: 'hidden' } : {}}>
            <h3 className="sr-only">회원가입 안내</h3>
            <div className="container-rocket reuse-in-signup">
                <span>🥰</span>
            </div>
            <p className="txt-signup-info">간편 회원가입을 진행합니다.</p>
            <button type="button" onClick={nextStage}>
                계속하기
            </button>
            <small>
                이미 회원이신가요? <Link href="/login">로그인</Link>하러 가기
            </small>
        </section>
    );
}
