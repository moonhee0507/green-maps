import React from 'react';
import { PictureSection } from './component/PictureSection';
import { WriteSection } from './component/WriteSection';
import { SubmitButton } from './component/SubmitButton';

export { ReviewForm };

function ReviewForm(props: { restaurantId: string; title: string }) {
    return (
        <main className="wrapper-review">
            <form>
                <PictureSection />
                <WriteSection title={props.title} />
                <SubmitButton restaurantId={props.restaurantId} />
            </form>
        </main>
    );
}
