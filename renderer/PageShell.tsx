import React from 'react';
import logo from '/logo.svg';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from './types';
import 'normalize.css';
import './style/index.scss';

export { PageShell };

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <Layout>
                    <LeftArea />
                    <App>{children}</App>
                </Layout>
            </PageContextProvider>
        </React.StrictMode>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    return <div className="layout">{children}</div>;
}

function LeftArea() {
    return (
        <div className="left-area">
            <a href="/">
                <img src={logo} width={200} alt="로고" />
            </a>
            <div className="txt-intro">
                <strong>채식 식당 검색과 북마크는</strong>
                <h1>그린 맵</h1>
            </div>
        </div>
    );
}

function App({ children }: { children: React.ReactNode }) {
    return <div className="app">{children}</div>;
}
