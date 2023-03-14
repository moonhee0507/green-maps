import mongoose, { Schema } from 'mongoose';

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
