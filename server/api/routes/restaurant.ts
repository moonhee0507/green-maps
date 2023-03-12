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

    // 인증식당정보 가져오기
    route.get('/certified', async (req: Request, res: Response) => {
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
                // return res.json(all);

                all.forEach((rest: any) => {
                    saveRestaurant({
                        title: rest.UPSO_NM,
                        category: rest.BIZCND_CODE_NM,
                        rating: undefined,
                        address: rest.RDN_CODE_NM,
                        certified: true,
                        certification: rest.CRTFC_GBN_NM,
                        updatedAt: rest.CRTFC_YMD,
                    });
                });
            }
        } catch (err) {
            console.error(err);
        }

        // const restaurant = new Restaurant(req.body);
    });

    // 인증식당 정보 저장
    route.post('/save', async (req: Request, res: Response) => {
        const restaurant = new Restaurant(req.body);

        restaurant.save(async (err, restaurantInfo) => {
            if (err) return res.json({ success: false, errorMessage: err.message });
            return res.status(200).json({ success: true });
        });
    });
};

async function saveRestaurant(restaurant: Restaurant) {
    try {
        const res = await fetch(`http://localhost:5000/api/restaurants/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(restaurant),
        });

        const data: any = await res.json();

        if (data.saveSuccess) console.log('인증업소 저장완료--');
        else console.log('❌❌❌', data.errorMessage);
    } catch (err) {
        console.error(err);
    }
}
