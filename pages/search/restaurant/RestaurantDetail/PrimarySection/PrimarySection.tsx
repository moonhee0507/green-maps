import React from 'react';
import type { Restaurant } from '../../../../../server/models/Restaurant';
import { ButtonContainer } from './component/ButtonContainer';
import { Title } from './component/Title';
import { Stars } from './component/Stars';

export { PrimarySection };

function PrimarySection(props: { restaurantInfo: Restaurant }) {
    const { _id, title, address, category, rating } = props.restaurantInfo;

    return (
        <>
            <Title title={title} address={address} category={category} />
            <Stars rating={rating} />
            <ButtonContainer restaurantId={_id} />
        </>
    );
}
