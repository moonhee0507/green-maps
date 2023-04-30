import mongoose, { Schema } from 'mongoose';

export type Review = {
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
    registeredAt: String,
    updatedAt: String,
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
