import mongoose, { Schema } from 'mongoose';

export type GroupList = {
    _id: string;
    name: string;
    registeredAt: string;
    groupIcon: string;
};

export type BookmarkGroup = {
    userId: string;
    groupList: GroupList[];
};

const bookmarkSchema = new Schema({
    userId: {
        type: String,
    },
    groupList: [
        {
            name: {
                type: String,
            },
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
            groupIcon: {
                type: String,
                required: true,
                default: '/images/icon-star.svg',
            },
        },
    ],
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

export default Bookmark;
