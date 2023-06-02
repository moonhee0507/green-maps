import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import randomizeFileName from '../../../../../../../components/image/randomizeFileName';
import { IMG_URL } from '../../../../../../../renderer/CONSTANT_URL';
import type { PhotoInReview } from '../../../../../../../server/models/Review';

/**
 * @SelectedImage
 * [0]: ObjectURL
 * [1]: file.type
 */
export type SelectedImage = [string, string];
export type RandomFileName = string;

export function PictureSection({ photos }: { photos?: PhotoInReview }) {
    const fileInput = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (images.length > 0) {
            setImages([]);
        } else {
            fileInput.current?.click();
        }
    };

    const [images, setImages] = useState<Array<SelectedImage>>(() => {
        const inEditPage = window.location.pathname.includes('/edit');

        if (inEditPage && photos && photos.length > 0) {
            const temp: Array<SelectedImage> = [];

            for (let photo of photos) {
                temp.push([`${IMG_URL}/${photo.src}`, photo.src.split('.').at(-1) as string]);
            }

            return temp;
        } else {
            return [];
        }
    });

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files: any = event.target.files;

        if (event.target.files !== null) {
            const temp: Array<SelectedImage> = [];
            for (let file of files) {
                temp.push([URL.createObjectURL(file), file.type]);
            }
            setImages(temp);
        }
    };

    /**
     * store에는 직렬화 불가능한 File 객체가 저장되지 않기 때문에
     * ObjectURL로 저장
     */
    const dispatch = useDispatch();

    useEffect(() => {
        if (images) {
            const temp: Array<RandomFileName> = [];
            for (let image of images) {
                const fileName = randomizeFileName() + '.' + image[1]?.replace('image/', '');
                temp.push(fileName);
            }

            dispatch({ type: 'reviewSlice/IMAGE_STATE', FILE_INFO: images, RANDOM_NAME: temp });
        }
    }, [images]);

    return (
        <fieldset className="section-add-picture">
            <legend className="sr-only">사진 첨부</legend>
            <div className="container-notice">
                <em>음식 사진이나 메뉴판 사진을 첨부해주세요. (최대 3장)</em>
            </div>
            <ul className="container-picture">
                <li className={`list-add-picture ${images.length > 0 ? 'reset' : ''}`} onClick={handleClick}>
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
                    {images.length > 0 ? <img src={images[0][0]} alt="첫번째 이미지" /> : null}
                </li>
                <li className="list-picture" area-label="추가한 이미지 리스트">
                    {images.length > 1 ? <img src={images[1][0]} alt="두번째 이미지" /> : null}
                </li>
                <li className="list-picture" area-label="추가한 이미지 리스트">
                    {images.length > 2 ? <img src={images[2][0]} alt="세번째 이미지" /> : null}
                </li>
            </ul>
        </fieldset>
    );
}
