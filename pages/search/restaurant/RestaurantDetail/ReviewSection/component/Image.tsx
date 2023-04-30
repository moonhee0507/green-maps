import React, { useState } from 'react';

export { Image };

function Image(props: { photoList: Array<{ src: string; pick: boolean }> }) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // pick이 true인 요소가 먼저 렌더링 되게 함
    const arrSort = [...props.photoList].sort((a, b) => {
        if (a.pick && !b.pick) {
            return -1;
        } else if (!a.pick && b.pick) {
            return 1;
        } else {
            return 0;
        }
    });

    function handleNextButton() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % arrSort.length);
    }

    function handlePrevButton() {
        setCurrentIndex((prevIndex) => (prevIndex + arrSort.length - 1) % arrSort.length);
    }

    return (
        <>
            <dt className="sr-only">사진</dt>
            <dd className="wrapper-review-img">
                <div className="container-review-img">
                    <p className="txt-count-img" area-label="사진 개수 정보">
                        {`${currentIndex + 1} / ${arrSort.length}`}
                    </p>
                    <button type="button" className="button-move-img prev" onClick={handlePrevButton}>
                        이전 사진
                    </button>
                    {arrSort.map((item, i) => {
                        return (
                            <img
                                key={i}
                                src={`https://${import.meta.env.VITE_AWS_S3_BUCKET}.s3.${
                                    import.meta.env.VITE_AWS_DEFAULT_REGION
                                }.amazonaws.com/${item.src}`}
                                style={{ display: i === currentIndex ? 'block' : 'none' }}
                            />
                        );
                    })}
                    <button type="button" className="button-move-img next" onClick={handleNextButton}>
                        다음 사진
                    </button>
                </div>
            </dd>
        </>
    );
}
