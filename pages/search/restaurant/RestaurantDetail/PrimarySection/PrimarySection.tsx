import React from 'react';
import { ButtonContainer } from './component/ButtonContainer';
import { Title } from './component/Title';
import { Stars } from './component/Stars';
import type { Restaurant } from '../../../../../server/models/Restaurant';

export { PrimarySection };

function PrimarySection({ restaurantInfo, isLoggedIn }: { restaurantInfo: Restaurant; isLoggedIn: boolean }) {
    const { _id, title, address, category, rating, certification } = restaurantInfo;

    const hasCert = typeof certification === 'string' ? true : false;

    let titleAttr: any = {
        title: title,
        address: address,
        category: category,
    };

    if (hasCert) {
        titleAttr = { ...titleAttr, cert: certification };
    }

    return (
        <section className="section-primary">
            <Title {...titleAttr} />
            <Stars rating={rating} />
            <ButtonContainer restaurantId={_id} isLoggedIn={isLoggedIn} />
        </section>
    );
}
