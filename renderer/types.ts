export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };

// Server-side pageContext built-in values
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

// Client-side pageContext built-in values, when using Server Routing
import type { PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient } from 'vite-plugin-ssr/types';
import { PostProps } from '../pages/community/Community';
import { UserInfo } from '../server/models/User';
import { Restaurant } from '../server/models/Restaurant';
import { Review } from '../server/models/Review';

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = {
    routeParams?: RouteParams;
    restaurantInfo?: any;
    reviews?: any;
    review?: Review;
    postProps?: PostProps;
    postInfo?: any;
    token?: string;
    user: {
        isLoggedIn: boolean;
        info: UserInfo | null;
    };
    postId?: string;
};
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
    documentProps?: {
        title?: string;
        description?: string;
    };
    PRELOADED_STATE: any;
    pageHtml?: any;
    user: {
        isLoggedIn: boolean;
        info: UserInfo | null;
    };
    groupName?: string[];
    token: string;
    restaurantInfo: Restaurant;
    reviews: Review[];
    postId: string;
    review: Review;
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;
