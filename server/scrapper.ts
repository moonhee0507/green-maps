import puppeteer, { ElementHandle } from 'puppeteer';
import fetch from 'node-fetch';
import { API_URL } from '../renderer/CONSTANT_URL';

type Restaurant = {
    title: string;
    category: string | undefined;
    rating: string | undefined;
    address: string | undefined;
    certified: boolean;
    certification: string | null;
    updatedAt: string;
    location: {
        type: string;
        coordinates: Array<number>;
    };
};

const cities = [
    '서울',
    '부산',
    '대구',
    '인천',
    '울산',
    '광주',
    '대전',
    '세종',
    '경기도',
    '강원도',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
];

const excludeCategory = [
    '단체,협회',
    '환경단체',
    '의류판매',
    '생활용품점',
    '요리학원',
    '교육단체',
    '대체의학',
    '곱창,막창',
    '갈비',
    '육류,고기',
    '족발,보쌈',
    '아웃도어용품',
    '양꼬치',
    '스테이크,립',
    '식품',
];

(async () => {
    // const browser = await puppeteer.launch({ headless: false, slowMo: 300, devtools: true, timeout: 600000 });
    const browser = await puppeteer.launch({ slowMo: 300 });
    const [page] = await browser.pages();

    await page.setViewport({ width: 1280, height: 1024 });
    await page.exposeFunction('saveScrapped', saveScrapped);

    for (let city of cities) {
        await page.goto(`https://map.kakao.com/?q=${city} 채식`);

        const totalDom = await page.$('#info\\.search\\.place\\.cnt');
        let totalNumForResult = await page.evaluate((em: any) => Number(em.innerHTML.replaceAll(',', '')), totalDom);

        for (let currentPage = 1; currentPage <= Math.trunc(totalNumForResult / 15) + 1; currentPage++) {
            await page.$$eval(
                '.link_name',
                async (elements, excludeCategory) => {
                    for (let element of elements) {
                        const category = element.parentElement?.nextElementSibling?.innerHTML;

                        if (typeof category === 'string') {
                            if (!excludeCategory.includes(category)) {
                                let inTheMiddle = {
                                    title: element.innerHTML.replace(/[<strong>|</strong>]/g, ''),
                                    category: category,
                                    rating: element.parentElement?.parentElement?.nextElementSibling?.firstElementChild
                                        ?.firstElementChild?.nextElementSibling?.innerHTML,
                                    address:
                                        element.parentElement?.parentElement?.nextElementSibling?.nextElementSibling
                                            ?.firstElementChild?.nextElementSibling?.firstElementChild?.innerHTML,
                                    certified: false,
                                    certification: null,
                                    updatedAt: new Date().toLocaleDateString('ko-KR'),
                                    location: {
                                        type: 'Point',
                                        coordinates: [0, 0],
                                    },
                                };

                                if (inTheMiddle.address) {
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

                                                if (
                                                    longitude >= -180 &&
                                                    longitude <= 180 &&
                                                    latitude >= -90 &&
                                                    latitude <= 90
                                                ) {
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
                                }

                                saveScrapped(inTheMiddle);
                            }
                        }
                    }
                },
                excludeCategory
            );

            const activeButton = (await page.$(
                '#info\\.search\\.page > .pageWrap > .ACTIVE'
            )) as ElementHandle<HTMLAnchorElement>;
            const activeNumber = await page.evaluate((a: HTMLAnchorElement) => a.innerHTML, activeButton);

            if (currentPage === 1) {
                const moreButton = (await page.$('#info\\.search\\.place\\.more')) as ElementHandle<HTMLAnchorElement>;

                if (moreButton) {
                    await moreButton.evaluate((a: HTMLAnchorElement) => a.click());
                } else break;
            } else if (currentPage % 5 === 0) {
                const nextButton = (await page.$('#info\\.search\\.page\\.next')) as ElementHandle<HTMLButtonElement>;

                if (Number(activeNumber) === currentPage) {
                    await nextButton.evaluate((b: HTMLButtonElement) => b.click());
                } else break;
            } else {
                if (Number(activeNumber) === currentPage) {
                    const pageNation = (await page.$(
                        '#info\\.search\\.page\\.no' + `${(currentPage % 5) + 1}`
                    )) as ElementHandle<HTMLAnchorElement>;
                    await pageNation.evaluate((a: HTMLAnchorElement) => a.click());
                } else break;
            }
        }
    }

    // new Promise(() => setTimeout((r) => r, 10 * 60 * 1000));

    await browser.close();
})();

async function saveScrapped(restaurant: Restaurant) {
    try {
        const res = await fetch(`${API_URL}/scrappers/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(restaurant),
        });

        const data: any = await res.json();

        if (data.saveSuccess) {
            console.log('저장완료--');
        } else {
            console.log('❌❌❌', data.errorMessage);
        }
    } catch (err) {
        console.error(err);
    }
}
