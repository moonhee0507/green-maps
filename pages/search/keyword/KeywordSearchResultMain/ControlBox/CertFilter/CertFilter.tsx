import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../renderer/store/hooks';
import { ADD_SELECTED_CERT } from '../../../../../../renderer/_reducers/_slices/mapSlice';

export { CertFilter };

function CertFilter() {
    const dispatch = useAppDispatch();

    const certList = ['채식음식점', '채식가능음식점'];

    useEffect(() => {
        dispatch(ADD_SELECTED_CERT([])); // 첫 렌더링 시 선택한 인증정보 초기화
    }, []);

    const handleClick = () => {
        // 인증체크한 식당 가져오기
        const checkedNode = Array.from(
            document.querySelectorAll('.checkbox-cert-filter') as NodeList
        ) as HTMLInputElement[];

        const checkedCertName: string[] = checkedNode.filter((node) => node.checked === true).map((node) => node.value);
        dispatch(ADD_SELECTED_CERT(checkedCertName));
    };

    return (
        <div className="container-filter">
            <em className="txt-filter-name">채식 인증</em>
            <div>
                <form>
                    <button type="button" onClick={handleClick} className="button-apply-filter">
                        적용
                    </button>
                    <div className="wrapper-checkbox-category reuse-in-result">
                        {certList.map((name, i) => {
                            return <CertItem key={Math.random()} name={name} index={i} />;
                        })}
                    </div>
                </form>
            </div>
        </div>
    );
}

function CertItem({ name, index }: { name: string; index: number }) {
    const selectedCert = useAppSelector((state) => state.mapSlice.selectedCert);
    const [isChecked, setIsChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        // 카테고리 선택 완료한 경우 체크상태 기억
        setIsChecked(selectedCert.includes(name));
    }, [selectedCert]);

    return (
        <div className="container-check-cert">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                id={`checkboxCert-${index}`}
                className="checkbox-cert-filter"
                value={name}
            />
            <label htmlFor={`checkboxCert-${index}`}>{name}</label>
        </div>
    );
}
