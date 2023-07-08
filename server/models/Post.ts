import mongoose, { Schema } from 'mongoose';
import { UserInfo } from './User';

export type CommentInPost = {
    _id: string;
    owner: {
        user_id: string | UserInfo;
    };
    content: string;
    like?: Array<{ user: string }>;
    registeredAt: string;
    updatedAt?: string;
};

export type Post = {
    _id: string;
    subject: string;
    owner: {
        user_id: string | UserInfo;
    };
    title: string;
    content: string;
    photo?: Array<{ src: string; pick: boolean }>;
    like?: Array<{ user: string }>;
    registeredAt: string;
    updatedAt?: string;
    comments?: Array<CommentInPost>;
};

const postSchema = new Schema({
    subject: {
        type: String,
        required: true,
    },
    owner: {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
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
    comments: [
        {
            owner: {
                // type: String,
                user_id: {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                    required: true,
                },
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
        },
    ],
});

const Post = mongoose.model('Post', postSchema);

export default Post;
