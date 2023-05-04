import mongoose, { Schema } from 'mongoose';

export type ReviewInPost = {
    owner: string;
    content: string;
    like?: Array<{ user: string }>;
    registeredAt: string;
    updatedAt?: string;
};

export type Post = {
    _id: string;
    subject: string;
    owner: string;
    title: string;
    content: string;
    photo?: Array<{ src: string; pick: boolean }>;
    like?: Array<{ user: string }>;
    registeredAt: string;
    updatedAt?: string;
    reviews?: Array<ReviewInPost>;
};

const postSchema = new Schema({
    subject: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        maxlength: 3000,
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
    },
    updatedAt: {
        type: String,
        required: false,
    },
    reviews: [
        {
            _id: mongoose.Types.ObjectId,
            owner: {
                type: String,
                required: true,
            },
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
            },
            updatedAt: {
                type: String,
                required: false,
            },
        },
    ],
});

const Post = mongoose.model('Post', postSchema);

export default Post;
