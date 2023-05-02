import React, { useState } from 'react';
import dummyImage from '/images/splash.jpg';

export { PostItem };

function PostItem() {
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const imageSize = '60px';

    return (
        <li>
            <dl
                style={{
                    width: `calc(100% - ${thumbnail ? imageSize : '0px'})`,
                }}
            >
                <dt className="sr-only">제목</dt>
                <dd className="txt-postitem-title">
                    여우비 안녕 함초롱하다 여우별 별하 미쁘다 안녕 노트북 책방 이플 도담도담 함초롱하다 아름드리 아슬라
                    도서관 소솜 바람꽃 포도 아리아 나래.
                </dd>
                <dt className="sr-only">내용</dt>
                <dd className="txt-postitem-content">
                    도서 미쁘다 그루잠 우리는 사과 가온해 도서관 여우별 바나나 포도 사과 아름드리 감또개 아리아 컴퓨터
                    산들림 산들림 컴퓨터 소록소록 산들림 아리아 로운 산들림 바람꽃 늘품 안녕 책방 우리는 로운 이플
                    여우별 나비잠 도담도담 바나나 도담도담 바나나 곰다시 컴퓨터 산들림 감사합니다 감또개 책방 감사합니다
                    여우비 옅구름 안녕 안녕 옅구름 함초롱하다 사과 바나나 그루잠 포도 안녕 비나리 여우비 소솜 안녕 늘품
                </dd>
                <dt className="sr-only">상세 내용</dt>
                <dd>
                    <dl className="container-post-subinfo">
                        <dt className="sr-only">좋아요 개수</dt>
                        <dd className="container-count-like">
                            <span>1</span>
                        </dd>
                        <dt className="sr-only">댓글 개수</dt>
                        <dd className="container-count-comment">
                            <span>1</span>
                        </dd>
                        <dt className="sr-only">작성 시간</dt>
                        <dd className="container-post-time">
                            <time dateTime="">10:41</time>
                        </dd>
                        <dt className="sr-only">작성자</dt>
                        <dd className="txt-post-owner">문희</dd>
                    </dl>
                </dd>
                <dt className="sr-only">미리보기 사진</dt>
            </dl>
            {thumbnail && (
                <div>
                    <img
                        src={dummyImage}
                        alt=""
                        style={{
                            width: imageSize,
                            height: imageSize,
                            objectFit: 'cover',
                        }}
                    />
                </div>
            )}
        </li>
    );
}
