import React from 'react';
import imgLoading from '/images/splash.jpg';

export default function HomeMain() {
    return (
        <main className="home-content" style={{ background: `url(${imgLoading}) no-repeat center center/cover` }}>
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
            </section>
            <div className="container-start">
                <a href="/search">🎉Start</a>
            </div>
        </main>
    );
}
