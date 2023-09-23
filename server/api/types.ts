import { Request } from "express";

enum SearchOrder {
    RELEVANCE = 'relevance', 
    RATING = 'rating', 
    REVIEW = 'review', 
    DISTANCE = 'distance'
};

type CategoryQuery = {
    $match: {
        category: {
            $in: string[];
        }
    }
} | {
    $match: {};
};

type CertQuery = {
    $match: {
        certification: {
            $in: string;
        }
    }
} | {
    $match: {};
};

type SortKey = 'rating' | 'countReview' | 'distance' | 'accuracy' | '_id';

type SortQuery = {
    $sort: Record<SortKey, 1 | -1>;
};

type DistanceQuery = {
    $geoNear: {
        spherical: boolean,
        near: {
            type: 'Point',
            coordinates: [number, number],
        },
        distanceField: 'distance',
    },
}

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
        currentLocation: [number, number];
        orderBy: SearchOrder;
    };
    categoryQuery?: CategoryQuery;
    certQuery?: CertQuery;
    sortQuery?: SortQuery;
    distanceQuery?: DistanceQuery;
}

export { SearchOrder };
export type { PostSearchReq };