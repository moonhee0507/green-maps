import React from 'react';
import { PictureSection } from './component/PictureSection';
import { WriteSection } from './component/WriteSection';
import { SubmitButton } from './component/SubmitButton';

export { ReviewForm };

function ReviewForm(props: { _id: string; title: string }) {
    return (
        <main className="wrapper-review">
            <form>
                <PictureSection />
                <WriteSection title={props.title} />
                <SubmitButton _id={props._id} />
            </form>
        </main>
    );
}
