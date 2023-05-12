import mongoose, { Schema } from 'mongoose';

export type Review = {
    _id: string;
    owner: string;
    restaurant: string;
    photo?: Array<{ src: string; pick: boolean }>;
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
        type: String,
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
                dateStyle: 'medium',
                timeStyle: 'medium',
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
