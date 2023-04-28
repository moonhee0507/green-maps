import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

export { PictureSection };

function PictureSection() {
    const fileInput = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInput.current?.click();
    };

    // TODO: file 객체
    const [image, setImage] = useState<{ ObjectURL: string; Type: string } | null>(null);

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files: any = event.target.files;

        // TODO: image에 담기(1개)
        if (event.target.files !== null) {
            setImage({ ObjectURL: URL.createObjectURL(files[0]), Type: files[0].type });
        }
    };

    /**
     * store에는 직렬화 불가능한 File 객체가 저장되지 않기 때문에
     * ObjectURL로 저장
     */
    const dispatch = useDispatch();

    /**
     * image가 바뀔 때만 함수 실행하기 위해 useCallback에 함수 등록
     */
    const randomizeFileName = useCallback(() => {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000000);

        return `${timestamp}-${randomNum}`;
    }, [image]);

    useEffect(() => {
        const fileName = randomizeFileName() + '.' + image?.Type.replace('image/', '');

        dispatch({ type: 'PICTURE_STATE', INFO: image });
        dispatch({ type: 'FILE_STATE', NAME: fileName });
    }, [image]);

    return (
        <fieldset className="section-add-picture">
            <legend>사진 첨부</legend>
            <em>
                음식 사진이나 메뉴판 사진을 <span style={{ fontWeight: 'bold' }}>한장씩</span> 첨부해주세요. (최대 3장)
            </em>
            <ul className="container-picture">
                <li className="button-add-picture" onClick={handleClick}>
                    <label className="sr-only" htmlFor="fileInput"></label>
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        style={{ display: 'none' }}
                        multiple
                        ref={fileInput}
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
