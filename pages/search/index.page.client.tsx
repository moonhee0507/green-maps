import React, { useEffect } from 'react';
import { SearchBar } from './searchBar';
import { displayMarkerForVeganRestaurant } from './kakaoMapAPI';

const { kakao }: any = window;
export { Page };

function Page() {
    useEffect(() => {
        // 서울시 채식인증 식당 가져오기
        let all: Array<object> = [];

        (async () => {
            try {
                const resForTotal = await fetch(
                    `http://openapi.seoul.go.kr:8088/68524f7775736a6d37346a78686e74/json/CrtfcUpsoInfo/1/1`
                );
                const data = await resForTotal.json();
                const total = data.CrtfcUpsoInfo.list_total_count;

                for (let startIndex = 1; startIndex <= total; startIndex += 1000) {
                    const resForVeganRestaurantInSeoul = await fetch(
                        `http://openapi.seoul.go.kr:8088/68524f7775736a6d37346a78686e74/json/CrtfcUpsoInfo/${startIndex}/${
                            startIndex + 999
                        }`
                    );
                    const veganRestaurantInSeoul = await resForVeganRestaurantInSeoul.json();

                    all.push(
                        ...veganRestaurantInSeoul.CrtfcUpsoInfo.row.filter(
                            (item: any) => item.CRTFC_GBN_NM === '채식가능음식점' || item.CRTFC_GBN_NM === '채식음식점'
                        )
                    );

                    if (startIndex === 1000 * Math.trunc(total / 1000) + 1) {
                        // 최종 데이터 확인용 콘솔
                        // console.log(all);

                        // 카카오와 연결할 데이터 형식 생성하기
                        let positions: Array<{ title: string; latlng: object }> = [];

                        all.forEach((rest: any) => {
                            positions.push({
                                title: rest.UPSO_NM,
                                latlng: new kakao.maps.LatLng(Number(rest.Y_DNTS), Number(rest.X_CNTS)),
                            });
                        });

                        displayMarkerForVeganRestaurant(positions);
                    }
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <>
            <SearchBar />
            <div id="map"></div>
        </>
    );
}
