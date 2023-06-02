import mongoose, { Schema } from 'mongoose';
import { Restaurant } from './Restaurant';

export type PhotoInReview = Array<{ src: string; pick: boolean }>;

export type Review = {
    _id: string;
    owner: string;
    restaurant: string | Restaurant;
    photo?: PhotoInReview;
    content: string;
    like?: Array<{ user: string }>;
    registeredAt: string;
    updatedAt?: string;
};

const reviewSchema = new Schema({
    owner: {
        type: String,
        required: true,
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    photo: [
        {
            src: {
                type: String,
                required: false,
            },
            pick: {
                type: Boolean,
                default: false,
            },
        },
    ],
    content: {
        type: String,
        maxlength: 100,
        required: true,
    },
    like: [
        {
            user: {
                type: String,
                required: false,
            },
        },
    ],
    registeredAt: {
        type: String,
        required: true,
        default: () => {
            return new Intl.DateTimeFormat('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }).format(new Date());
        },
    },
    updatedAt: {
        type: String,
        required: false,
    },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
