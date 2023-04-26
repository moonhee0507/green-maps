import mongoose, { Schema } from 'mongoose';

export type Review = {
    _id: string;
    owner: string;
    photo: Array<{ src: Buffer; type: string; pick: Boolean }>;
    content: String;
    like: Array<{ user: string }>;
    registeredAt: String;
    updatedAt: String;
};

const reviewSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    owner: String,
    photo: [
        {
            src: Buffer,
            type: String,
            pick: {
                type: Boolean,
                default: false,
            },
        },
    ],
    content: {
        type: String,
        maxlength: 100,
    },
    like: [
        {
            user: String,
        },
    ],
    registeredAt: String,
    updatedAt: String,
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
