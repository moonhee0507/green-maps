import React, { useEffect, useState } from 'react';
import { ButtonContainer } from './component/ButtonContainer';
import { Title } from './component/Title';
import { Stars } from './component/Stars';
import type { Restaurant } from '../../../../../server/models/Restaurant';

export { PrimarySection };

function PrimarySection({ restaurantInfo, isLoggedIn }: { restaurantInfo: Restaurant | null; isLoggedIn: boolean }) {
    // const { _id, title, address, category, rating, certification } = restaurantInfo;

    const [info, setInfo] = useState<Restaurant | null>(null);

    useEffect(() => {
        if (restaurantInfo !== null) {
            setInfo(restaurantInfo);
        }
    }, [restaurantInfo]);

    return info ? (
        <section className="section-primary">
            <Title title={info.title} address={info.address} category={info.category} cert={info.certification} />
            <Stars rating={info.rating} />
            <ButtonContainer restaurantId={info._id} isLoggedIn={isLoggedIn} />
        </section>
    ) : (
        <div className="style-wrapper-no-review">
            <div className="txt-no-review">😭</div>
            <p>목록이 없어요.</p>
        </div>
    );
}
