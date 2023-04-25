import { Model, Schema, HydratedDocument, model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface UserInfo {
    userId: string;
    nickName: string;
    password: string;
    host: string;
    snsId: string;
    token: string;
    tokenExp: number;
    role: number;
    active: boolean;
    bookmarkList: Array<{ _id: string; registeredAt: string; groupName: string }>;
    likeList: Array<{ _id: string; registeredAt: string }>;
}

interface UserMethod {
    comparePassword(plain: string, cb: (err: Error | null, same: boolean | null) => any): any;
    generateToken(cb: (err?: Error | null, user?: any) => any): any;
}

interface UserModel extends Model<UserInfo, {}, UserMethod> {
    findByToken(
        token: string,
        cb: (err: Error | null, user?: any) => any
    ): Promise<HydratedDocument<UserInfo, {}, UserMethod>>;
}

const userSchema = new Schema<UserInfo, UserModel, UserMethod>({
    userId: {
        type: String,
        maxlength: 20,
        unique: 1,
        required: true,
    },
    nickName: {
        type: String,
        maxlength: 20,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 10,
        required: true,
    },
    host: {
        type: String,
        default: 'local',
    },
    snsId: {
        type: String,
    },
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
    role: {
        type: Number,
        default: 1,
    },
    active: {
        type: Boolean,
        default: true,
    },
    bookmarkList: [
        {
            _id: String,
            registeredAt: String,
            groupName: {
                type: String,
                required: false,
                default: '기본',
            },
        },
    ],
    likeList: [
        {
            _id: String,
            registeredAt: String,
        },
    ],
});

const saltRounds = 10;

// 유저 모델에 저장하기 전에 콜백함수 처리
userSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            if (user.password) {
                bcrypt.hash(user.password, salt, (err, encrypted) => {
                    if (err) return next(err);

                    user.password = encrypted;
                    next();
                });
            }
        });
    } else next();
});

// comparePassword메서드 만들기
userSchema.method(
    'comparePassword',
    function comparePassword(plain: string, cb: (err: Error | null, same: boolean | null) => any): any {
        bcrypt.compare(plain, this.password, function (err, same) {
            if (err) return cb(err, null);
            cb(null, same);
        });
    }
);

const privateKey: any = process.env.PRIVATE_KEY?.replace(/\\n/g, '');
const publicKey: any = process.env.PUBLIC_KEY?.replace(/\\n/g, '');

// generateToken메서드 만들기
userSchema.method('generateToken', async function generateToken(cb: (err?: Error | null, user?: any) => any) {
    var user = this;
    // 몽고DB의 _id는 string이 아니기 때문에 toHexString 메서드 사용해서 형변환
    const token = jwt.sign({ id: this._id.toHexString(), iat: Date.now() }, privateKey, {
        algorithm: 'RS256',
        expiresIn: 3000,
    });
    user.token = token;

    await user
        .save()
        .then((user: any) => cb(null, user))
        .catch((err: any) => cb(err));
});

// findByToken메서드 만들기
userSchema.static('findByToken', function findByToken(token: string, cb: (err: Error | null, user?: any) => any) {
    var user = this;

    jwt.verify(token, publicKey, { algorithms: ['RS256'] }, async function (err: any, decoded: any) {
        await user.findOne({ _id: decoded.id, token: token }).then((doc) => {
            if (!doc) return cb(err);
            cb(null, user);
        });
    });
});

const User = model<UserInfo, UserModel>('User', userSchema);

export default User;
