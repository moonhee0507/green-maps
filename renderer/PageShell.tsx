import React from 'react';
import logo from '/images/logo.svg';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from './types';
import 'normalize.css';
import { NavBar } from '../components/navBar';
import { getStore } from './store';
import { Provider } from 'react-redux';
import { Link } from './Link';

export { PageShell };

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
    const store = getStore();

    return (
        <React.StrictMode>
            <Provider store={store}>
                <PageContextProvider pageContext={pageContext}>
                    <Layout>
                        <LeftArea />
                        <App>
                            {children}
                            <NavBar />
                        </App>
                    </Layout>
                </PageContextProvider>
            </Provider>
        </React.StrictMode>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    return <div className="layout">{children}</div>;
}

function LeftArea() {
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
