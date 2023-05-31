import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';
import fetch from 'node-fetch';
import { regionCode } from '../../REGION_CODE.js';

const route = Router();
const objSigungu = regionCode.서울특별시.시군구;

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

    route.get('/all', async (req: Request, res: Response) => {
        try {
            const total = await Restaurant.countDocuments({});
            const lists = await Restaurant.find({}).sort({ address: -1 });

            res.json({
                total: total,
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
                `http://openapi.seoul.go.kr:8088/68524f7775736a6d37346a78686e74/json/CrtfcUpsoInfo/1/1`,
                {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'public, max-age=31536000',
                    },
                }
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
                    .map(async (list: FromSeoulOpenApi) => {
                        let newAddress = list.RDN_CODE_NM;
                        Object.keys(regionCode.서울특별시.시군구).forEach((sigungu: string) => {
                            newAddress = newAddress
                                .replace(objSigungu[sigungu], sigungu)
                                .replace('서울특별시특별시', '서울특별시');
                        });

                        let inTheMiddle = {
                            title: list.UPSO_NM,
                            category: list.BIZCND_CODE_NM,
                            rating: (Math.random() * 2 + 3).toFixed(1),
                            address: newAddress,
                            certified: true,
                            certification: list.CRTFC_GBN_NM,
                            updatedAt: list.CRTFC_YMD,
                            location: {
                                type: 'Point',
                                coordinates: [0, 0],
                            },
                        };

                        await fetch(
                            `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURI(
                                inTheMiddle.address
                            )}`,
                            {
                                method: 'GET',
                                headers: {
                                    Authorization: `KakaoAK 9152694fdd918ff54fd3534779116e67`,
                                },
                            }
                        )
                            .then((res) => res.json())
                            .then((data: any) => {
                                if (data.documents) {
                                    const longitude = Number(data?.documents[0]?.x);
                                    const latitude = Number(data?.documents[0]?.y);

                                    if (longitude >= -180 && longitude <= 180 && latitude >= -90 && latitude <= 90) {
                                        inTheMiddle = {
                                            ...inTheMiddle,
                                            location: {
                                                type: 'Point',
                                                coordinates: [longitude, latitude],
                                            },
                                        };
                                    }
                                }
                            });

                        await Restaurant.create(inTheMiddle);
                    });
            }

            res.status(200).json({ success: true });
        } catch (err: any) {
            res.json({ success: false, errorMessage: err.message });
        }
    });

    route.get('/:restaurantId', async (req: Request, res: Response) => {
        try {
            const restaurant = await Restaurant.findById(req.params.restaurantId).populate('reviews');

            if (!restaurant) {
                res.json({ success: false, message: '식당이 존재하지 않습니다.' });
            } else {
                res.json({ success: true, restaurantInfo: restaurant });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.json({ success: false, errorMessage: err.message });
            }
        }
    });
};
