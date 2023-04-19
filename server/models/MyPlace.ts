import mongoose, { Schema } from 'mongoose';

const myPlaceSchema = new Schema({
    title: {
        type: String,
    },
    address: {
        type: String,
    },
    groupName: {
        type: String,
    },
    registeredAt: {
        type: String,
    },
});

const MyPlace = mongoose.model('MyPlace', myPlaceSchema);

export default MyPlace;
