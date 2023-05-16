import 'normalize.css';
import React from 'react';
import { Provider } from 'react-redux';
import { PageContextProvider } from './usePageContext';
import { getStore } from './store/index.js';
import { Link } from './Link';
import type { PageContext } from './types';
import logo from '/images/logo.svg';

export { PageShell };

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
    const store = getStore();

    return (
        <React.StrictMode>
            <Provider store={store}>
                <PageContextProvider pageContext={pageContext}>
                    <Layout>
                        <BackgroundArea />
                        <App>{children}</App>
                    </Layout>
                </PageContextProvider>
            </Provider>
        </React.StrictMode>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    return <div className="layout">{children}</div>;
}

function BackgroundArea() {
    return (
        <div className="left-area">
            <Link href="/">
                <img src={logo} width={200} alt="로고" />
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
