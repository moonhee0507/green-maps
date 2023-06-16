import React from 'react';
import imgLoading from '/images/splash.jpg';
import { BeforeInstallPromptEvent } from './index.page';

export default function HomeMain({
    deferredPrompt,
    setDeferredPrompt,
}: {
    deferredPrompt: BeforeInstallPromptEvent | null;
    setDeferredPrompt: React.Dispatch<React.SetStateAction<BeforeInstallPromptEvent | null>>;
}) {
    console.log(deferredPrompt);
    const handleInstall = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();

            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    // 설치한 사용자
                } else {
                    // 설치 x
                }

                setDeferredPrompt(null);
            });
        }
    };

    const handleClick = () => {
        window.location.href = `/search`;
    };

    return (
        <main
            className="home-content"
            style={{ background: `url(${imgLoading}) no-repeat center center/cover` }}
            onClick={handleClick}
        >
            <div className="container-title">
                <h2>
                    <span>Green</span>
                    <span>Maps</span>
                </h2>
            </div>
            <section className="section-desc-service">
                <h3>이런 서비스에요!</h3>
                <div className="container-desc-service">
                    <p>전국 2400개의 채식 식당을 찾을 수 있어요.</p>
                    <p>북마크를 그룹으로 관리해요.</p>
                    <p>채식 식당에 대한 후기를 남길 수 있어요.</p>
                    <p>게시판을 통해 소통해요!</p>
                </div>
                {deferredPrompt && (
                    <button type="button" onClick={handleInstall} className="button-pwa">
                        Web App 설치
                    </button>
                )}
            </section>
            {/* <div className="container-start">
                <a href="/search">🎉Start</a>
            </div> */}
            <div className="radialForNextPage" />
        </main>
    );
}
