import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        const mongoURI = `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PW}@cluster0.absy1ck.mongodb.net/?retryWrites=true&w=majority`;

        mongoose.set('strictQuery', false);
        mongoose
            .connect(mongoURI)
            .then(() => console.log('🟢 몽고DB 연결 성공...'))
            .catch((e) => console.error(e));
    }
}

export default new Database();
