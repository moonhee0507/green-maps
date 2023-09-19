import { Request } from "express";

enum SearchOrder {
    RELEVANCE = 'relevance', 
    RATING = 'rating', 
    REVIEW = 'review', 
    DISTANCE = 'distance'
};

interface PostSearchReq extends Request {
    query: {
        page?: string;
        limit?: string;
        keyword: string;
        orderBy: SearchOrder;
    };
    body: {
        category: string;
        cert: string;
        currentLocation: number[];
    };
    categoryQuery?: unknown;
    certQuery?: unknown;
}

export { SearchOrder };
export type { PostSearchReq };