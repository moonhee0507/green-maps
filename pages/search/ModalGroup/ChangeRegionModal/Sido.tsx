import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { SET_SELECTED_SIDO } from '../../../../renderer/_reducers/_slices/mapSlice';
import REGION from '../../../../components/region/REGION.js';

export { Sido };

function Sido() {
    const [sidoList] = useState<string[]>(() => Object.keys(REGION).sort());

    return (
        <div className="container-sido">
            <ul>
                {sidoList.map((v) => {
                    return <SidoListItem key={Math.random()} name={v} />;
                })}
            </ul>
        </div>
    );
}

function SidoListItem({ name }: { name: string }) {
    const dispatch = useAppDispatch();

    const currentSido = useAppSelector((state) => state.mapSlice.currentSido);
    const selectedSido = useAppSelector((state) => state.mapSlice.selectedSido);

    const [on, setOn] = useState(false);

    useEffect(() => {
        if (selectedSido === '') {
            if (currentSido.includes(name)) {
                setOn(true);
            } else {
                setOn(false);
            }
        } else {
            if (selectedSido.includes(name)) {
                setOn(true);
            } else {
                setOn(false);
            }
        }
    }, [currentSido, selectedSido]);

    const handleClick = () => {
        dispatch(SET_SELECTED_SIDO(name));
    };

    return (
        <li onClick={handleClick}>
            <p className={`txt-sido ${on ? 'on' : ''}`}>{name}</p>
        </li>
    );
}
