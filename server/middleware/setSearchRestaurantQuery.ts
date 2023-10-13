import { Response, NextFunction } from "express";
import { PostSearchReq, SearchOrder } from "../api/types.js";
import CATEGORIES from "../../components/image/CATEGORY.js";

export { 
    setSearchCategoryQuery, 
    setSearchCertQuery, 
    setSearchSortQuery, 
    setSearchDistanceQuery 
};

function setSearchCategoryQuery(req: PostSearchReq, res: Response, next: NextFunction) {
    const category = req.body.category;

    if (Array.isArray(category) && category.length > 0) {
        const convertToRegisteredCategoryInSchema = [];

        for (let i = 0; i < category.length; i++) {
            convertToRegisteredCategoryInSchema.push(...CATEGORIES[category[i]].list);
        }

        req.categoryQuery = {
            $match: {
                category: {
                    $in: convertToRegisteredCategoryInSchema,
                },
            },
        };
    } else if (category === '*') {
        req.categoryQuery = {
            $match: {},
        };
    } else {
        req.categoryQuery = {
            $match: {},
        }
    }

    next();
}

function setSearchCertQuery(req: PostSearchReq, res: Response, next: NextFunction) {
    const cert = req.body.cert;

    if (Array.isArray(cert) && cert.length > 0) {
        req.certQuery = {
            $match: {
                certification: {
                    $in: cert,
                },
            },
        };
    } else if (cert === '*') {
        req.certQuery = {
            $match: {},
        };
    } else {
        req.certQuery = {
            $match: {},
        }
    }

    next();
}

function setSearchSortQuery(req: PostSearchReq, res: Response, next: NextFunction) {
    const orderBy = req.query.orderBy ?? SearchOrder.RELEVANCE;

    if (orderBy === SearchOrder.RATING) {
        req.sortQuery = {
            $sort: {
                rating: -1,
                accuracy: -1,
                distance: 1
            },
        }
    } else if (orderBy === SearchOrder.REVIEW) { // countReview 필드 추가
        req.sortQuery = {
            $sort: {
                countReview: -1,
                accuracy: -1,
                distance: 1
            },
        }
    } else if (orderBy === SearchOrder.DISTANCE) {
        req.sortQuery = {
            $sort: {
                distance: 1
            },
        };
    } else {
        req.sortQuery = {
            $sort: {
                accuracy: -1,
                distance: 1
            },
        };
    }

    next();
}

function setSearchDistanceQuery(req: PostSearchReq, res: Response, next: NextFunction) {
    const currentLocation = req.body.currentLocation;
    req.distanceQuery = {
        $geoNear: {
            spherical: true,
            near: {
                type: 'Point',
                coordinates: currentLocation,
            },
            distanceField: 'distance',
        },
    }

    next();
}