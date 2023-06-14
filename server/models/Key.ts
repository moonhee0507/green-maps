import mongoose, { Schema } from 'mongoose';

const keySchema = new Schema({
    rsaPrivate: {
        type: String,
    },
    rsaPublic: {
        type: String,
    },
});

const Key = mongoose.model('Key', keySchema);

export default Key;
