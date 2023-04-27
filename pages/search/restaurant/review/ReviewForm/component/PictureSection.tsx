import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import store from '../../../../../../renderer/store';
import { useDispatch } from 'react-redux';

export { PictureSection };

function PictureSection() {
    // TODO: file 객체
    const [image, setImage] = useState<any>(null);

    const clickInput = () => {
        document.getElementById('fileInput')?.click();
    };

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files: any = event.target.files;

        // TODO: image에 담기(1개)
        if (event.target.files !== null) {
            setImage(URL.createObjectURL(files[0]));
        }
    };

    /** 임의 작성: redux store에는 직렬화 불가능한 값인 file 객체가 저장되지 않기 때문에 ObjectURL로 저장 */
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'PICTURE_STATE', INFO: image });
    }, [image]);

    return (
        <fieldset className="section-add-picture">
            <legend>사진 첨부</legend>
            <em>
                음식 사진이나 메뉴판 사진을 <span style={{ fontWeight: 'bold' }}>한장씩</span> 첨부해주세요. (최대 3장)
            </em>
            <ul className="container-picture">
                <li className="button-add-picture" onClick={clickInput}>
                    <label className="sr-only" htmlFor="fileInput"></label>
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        style={{ display: 'none' }}
                        multiple
                    />
                </li>
                <li className="list-picture" area-label="추가한 이미지 리스트">
                    <img src="" alt="" />
                </li>
                <li className="list-picture" area-label="추가한 이미지 리스트">
                    <img src="" alt="" />
                </li>
                <li className="list-picture" area-label="추가한 이미지 리스트">
                    <img src="" alt="" />
                </li>
            </ul>
        </fieldset>
    );
}
