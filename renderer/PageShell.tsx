import 'normalize.css';
// import '/style/index.css';
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
            <div className="txt-intro">
                <strong>채식 식당 검색과 북마크 서비스</strong>
                <h1>
                    <Link href="/">그린 맵</Link>
                </h1>
            </div>
        </div>
    );
}

function App({ children }: { children: React.ReactNode }) {
    return <div className="app">{children}</div>;
}
