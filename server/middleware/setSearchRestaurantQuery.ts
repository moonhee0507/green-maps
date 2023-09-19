import { Response, NextFunction } from "express";
import { PostSearchReq } from "../api/types";
import CATEGORIES from "../../components/image/CATEGORY.js";

export { setSearchCategoryQuery, setSearchCertQuery };

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