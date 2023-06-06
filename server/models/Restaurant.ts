import mongoose, { Schema } from 'mongoose';
import { Review } from './Review';

export type Restaurant = {
    _id: string;
    title: string;
    category: string;
    rating: string | number;
    address: string;
    certified: boolean;
    certification: string | null;
    updatedAt: string;
    location: {
        type: string;
        coordinates: [number, number];
    };
    reviews: Review[];
};

const restaurantSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: {
        type: String,
    },
    category: {
        type: String,
    },
    rating: {
        type: String,
    },
    address: {
        type: String,
    },
    certified: {
        type: Boolean,
        default: false,
    },
    certification: {
        type: String,
    },
    updatedAt: {
        type: String,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
});

restaurantSchema.index({ title: 1, address: 1 });
restaurantSchema.index({ location: '2dsphere' });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
