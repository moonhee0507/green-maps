import React from 'react';
import { PictureSection } from './component/PictureSection';
import { WriteSection } from './component/WriteSection';
import { SubmitButton } from './component/SubmitButton';

export { ReviewForm };

function ReviewForm({ restaurantId, title }: { restaurantId: string; title: string }) {
    return (
        <main className="wrapper-review">
            <form>
                <PictureSection />
                <WriteSection title={title} />
                <SubmitButton restaurantId={restaurantId} />
            </form>
        </main>
    );
}
