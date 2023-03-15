import mongoose, { Schema } from 'mongoose';

export type Restaurant = {
    title: string;
    category: string;
    rating: string;
    address: string;
    certified: boolean;
    certification: string | null;
    updatedAt: string;
};

const restaurantSchema = new Schema({
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
});

restaurantSchema.index({ title: 1, address: 1 });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
