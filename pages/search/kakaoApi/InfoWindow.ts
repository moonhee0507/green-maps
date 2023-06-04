import { Restaurant } from '../../../server/models/Restaurant';

export default function InfoWindow({ restaurantInfo }: { restaurantInfo: Restaurant }) {
    const { _id, title, rating, reviews, address } = restaurantInfo;
    return `
        <div style="padding:20px;" class="wrapper-infowindow">
            <div>
                <dl>
                    <dt>식당 이름</dt>
                    <dd>
                        <a href="/search/${_id}" class="">${title}</a>
                    </dd>
                    
                    <div>
                        <dt>별점</dt>
                        <dd>${rating}</dd>

                        <dt>리뷰 개수</dt>
                        <dd>${reviews.length}</dd>
                    </div>

                    <dt>주소</dt>
                    <dd>${address}</dd>

                </dl>

                <div>
                    <button>북마크 버튼</button>
                    <button>다음지도에서 보기 버튼</button>
                    <button>길찾기 버튼</button>
                </div>

                <button class="button-close">닫기</button>
            </div>
        </div>
    `;
}
