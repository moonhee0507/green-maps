import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';
import fetch from 'node-fetch';

const route = Router();

type Restaurant = {
    title: string;
    category: string | undefined;
    rating: string | undefined;
    address: string | undefined;
    certified: boolean;
    certification: string | null;
    updatedAt: string;
};

type FromSeoulOpenApi = {
    CRTFC_UPSO_MGT_SNO: number;
    UPSO_SNO: string;
    UPSO_NM: string; // 업소명
    CGG_CODE: string;
    CGG_CODE_NM: string;
    COB_CODE_NM: string;
    BIZCND_CODE_NM: string; // 카테고리
    OWNER_NM: string;
    CRTFC_GBN: string;
    CRTFC_GBN_NM: string; // 인증명
    CRTFC_CHR_NM: string;
    CRTFC_CHR_ID: string;
    CRTFC_YMD: string; // 인증날짜
    USE_YN: string;
    MAP_INDICT_YN: string;
    CRTFC_CLASS: string;
    Y_DNTS: string; // 위도
    X_CNTS: string; // 경도
    TEL_NO: string; // 전화번호
    RDN_DETAIL_ADDR: string;
    RDN_ADDR_CODE: string;
    RDN_CODE_NM: string; // 주소
    BIZCND_CODE: string;
    COB_CODE: string;
    CRTFC_SNO: string;
    CRT_TIME: string;
    CRT_USR: string;
    UPD_TIME: string;
    FOOD_MENU: string;
    GNT_NO: string;
    CRTFC_YN: string;
};

export default (app: Router) => {
    app.use('/restaurants', route);

    route.get('/', async (req: Request, res: Response) => {
        const page = Number(req.query.page || 1);
        const limit = Number(req.query.limit || 20);

        try {
            const total = await Restaurant.countDocuments({});
            const lists = await Restaurant.find({})
                .sort({ address: -1 })
                .skip(limit * (page - 1))
                .limit(limit);

            res.json({
                total: total,
                countLimit: limit,
                currentPage: page,
                lists,
            });
        } catch (err) {
            console.error(err);
        }
    });

    route.post('/save', async (req: Request, res: Response) => {
        let all: Array<FromSeoulOpenApi> = [];
        try {
            const resForTotal = await fetch(
                `http://openapi.seoul.go.kr:8088/68524f7775736a6d37346a78686e74/json/CrtfcUpsoInfo/1/1`
            );
            const data: any = await resForTotal.json();
            const total = data.CrtfcUpsoInfo.list_total_count;

            for (let startIndex = 1; startIndex <= total; startIndex += 1000) {
                const resForVeganRestaurantInSeoul = await fetch(
                    `http://openapi.seoul.go.kr:8088/68524f7775736a6d37346a78686e74/json/CrtfcUpsoInfo/${startIndex}/${
                        startIndex + 999
                    }`
                );
                const veganRestaurantInSeoul: any = await resForVeganRestaurantInSeoul.json();

                all.push(
                    ...veganRestaurantInSeoul.CrtfcUpsoInfo.row.filter(
                        (item: any) => item.CRTFC_GBN_NM === '채식가능음식점' || item.CRTFC_GBN_NM === '채식음식점'
                    )
                );

                veganRestaurantInSeoul.CrtfcUpsoInfo.row
                    .filter((item: any) => item.CRTFC_GBN_NM === '채식가능음식점' || item.CRTFC_GBN_NM === '채식음식점')
                    .forEach(async (list: FromSeoulOpenApi) => {
                        await Restaurant.create({
                            title: list.UPSO_NM,
                            category: list.BIZCND_CODE_NM,
                            rating: (Math.random() * 2 + 3).toFixed(1),
                            address: list.RDN_CODE_NM,
                            certified: true,
                            certification: list.CRTFC_GBN_NM,
                            updatedAt: list.CRTFC_YMD,
                        });

                        console.log('인증업소 저장완료--');
                    });
            }

            res.status(200).json({ success: true });
        } catch (err: any) {
            res.json({ success: false, errorMessage: err.message });
        }
    });
};
