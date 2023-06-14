import React from 'react';
import { CopyButton } from '../../../../../../components/button/CopyButton';

export { Title };

function Title(props: { title: string; address: string; category: string; cert: string | null }) {
    return (
        <div>
            {props.cert ? <div className="restaurant-cert">{props.cert}</div> : null}
            <div className="restaurant-category">{props.category}</div>
            <h3 className="txt-restaurant-title">{props.title}</h3>
            <div>
                <span className="txt-restaurant-address">{props.address} </span>
                <CopyButton address={props.address} />
            </div>
        </div>
    );
}
