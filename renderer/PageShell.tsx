import 'normalize.css';
import './scss/index.css';
import logo from '/images/logo.png';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { PageContextProvider } from './usePageContext';
import { Link } from './Link';
import type { PageContext } from './types';

export { PageShell };

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
    return (
        <Provider store={store}>
            <PageContextProvider pageContext={pageContext}>
                <Layout>
                    <BackgroundArea />
                    <App>{children}</App>
                </Layout>
            </PageContextProvider>
        </Provider>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    return <div className="layout">{children}</div>;
}

function BackgroundArea() {
    return (
        <div className="left-area">
            <Link href="/">
                <div className="style-container-logo">
                    <img className="img-logo" src={logo} width={200} alt="로고" />
                </div>
            </Link>
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
