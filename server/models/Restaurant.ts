import mongoose, { Schema } from 'mongoose';

export type Restaurant = {
    _id: string;
    title: string;
    category: string;
    rating: string;
    address: string;
    certified: boolean;
    certification: string | null;
    updatedAt: string;
    location: {
        type: string;
        coordinates: [number, number];
    };
};

const restaurantSchema = new Schema({
    _id: mongoose.Types.ObjectId,
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
});

restaurantSchema.index({ title: 1, address: 1, location: '2dsphere' });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
