import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../../../../renderer/store';
import { PICTURE_STATE, WRITE_STATE } from '../../../../../../renderer/_actions';

export { SubmitButton };

function SubmitButton(props: { _id: string }) {
    // TODO: submit function
    const [photo, setPhoto] = useState<FileList | null>(null);
    const content = useSelector((state: any) => state.reviewForm.CONTENT);
    const id = useSelector((state: any) => state.reviewForm.ID);
    const dispatch = useDispatch();

    function submit() {
        const formData = new FormData();

        if (photo) {
            for (let i = 0; i < photo.length; i++) {
                formData.append('photo', photo[i]);
            }
        }

        formData.append('content', content);
        formData.append('owner', id);

        fetch(`http://localhost:5000/api/reviews/`, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: PICTURE_STATE, LIST: [] });
                dispatch({ type: WRITE_STATE, CONTENT: '' });
            })
            .catch((err) => console.error(err));
    }

    const userInfo = useCallback(async () => {
        const res = await fetch(`http://localhost:5000/api/users/`);
        const data = await res.json();

        return data;
    }, [props._id]);

    useEffect(() => {
        userInfo().then((data) => store.dispatch({ type: 'OWNER_STATE', ID: data.user.userId }));
    }, [userInfo]);

    return (
        <button
            type="button"
            onClick={submit}
            style={{ width: '100%', marginTop: '10px', backgroundColor: 'lightgreen' }}
        >
            작성 완료
        </button>
    );
}
