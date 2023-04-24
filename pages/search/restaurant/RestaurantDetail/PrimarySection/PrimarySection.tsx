import React from 'react';
import type { Restaurant } from '../../../../../server/models/Restaurant';
import { ButtonContainer } from './component/ButtonContainer';
import { Title } from './component/Title';
import { Stars } from './component/Stars';

export { PrimarySection };

function PrimarySection(props: { restaurantInfo: Restaurant }) {
    const { _id, title, address, category, rating, certification } = props.restaurantInfo;

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
            <ButtonContainer restaurantId={_id} />
        </section>
    );
}
