import React, { ChangeEvent, useEffect, useState } from 'react';
import store from '../../../../../../renderer/store';

export { PictureSection };

function PictureSection() {
    const [selectedFiles, setSelectedFiles] = useState<Array<string>>([]);

    useEffect(() => {
        if (selectedFiles.length > 3) {
            alert('더이상 첨부할 수 없습니다.');
            selectedFiles.pop();
        }

        store.dispatch({
            type: 'PICTURE_STATE',
            LIST: selectedFiles,
        });
    }, [selectedFiles]);

    const clickInput = () => {
        document.getElementById('fileInput')?.click();
    };

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        setSelectedFiles(selectedFiles.concat(URL.createObjectURL(files![0])));
    };

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
                    />
                </li>
                <li className="list-picture" area-label="추가한 이미지 리스트">
                    {selectedFiles[0] && <img src={selectedFiles[0]} alt="미리보기" />}
                </li>
                <li className="list-picture" area-label="추가한 이미지 리스트">
                    {selectedFiles[1] && <img src={selectedFiles[1]} alt="미리보기" />}
                </li>
                <li className="list-picture" area-label="추가한 이미지 리스트">
                    {selectedFiles[2] && <img src={selectedFiles[2]} alt="미리보기" />}
                </li>
            </ul>
        </fieldset>
    );
}
