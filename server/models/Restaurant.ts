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
        unique: 1,
    },
    certified: {
        type: Boolean,
        default: false,
    },
    certification: {
        type: String,
    },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
