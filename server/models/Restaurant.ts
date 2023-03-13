import mongoose, { Schema } from 'mongoose';

const restaurantSchema = new Schema({
    title: {
        type: String,
        index: {
            unique: true,
        },
    },
    category: {
        type: String,
    },
    rating: {
        type: String,
    },
    address: {
        type: String,
        index: {
            unique: true,
        },
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

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
