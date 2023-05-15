export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };

// Server-side pageContext built-in values
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

// Client-side pageContext built-in values, when using Server Routing
import type { PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient } from 'vite-plugin-ssr/types';

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = { routeParams?: RouteParams; restaurantInfo?: any; reviews?: any; postInfo?: any; token?: string };
type RouteParams = { keyword?: string };

export type PageContextCustom = {
    Page: Page;
    pageProps?: PageProps;
    urlPathname: string;
    exports: {
        documentProps?: {
            title?: string;
            description?: string;
        };
    };
    PRELOADED_STATE: any;
    pageHtml?: any;
    user?: {
        host: string;
        role: string;
        userId: string;
        nickName: string;
    };
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;
