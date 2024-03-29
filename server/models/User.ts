import { Model, Schema, HydratedDocument, model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { Restaurant } from './Restaurant';

export type Bookmark = {
    _id: string | Restaurant;
    registeredAt: string;
    groupName: string;
};

export type Like = {
    _id: string | Restaurant;
    registeredAt: string;
};

export interface UserInfo {
    _id: string;
    userId: string;
    nickName: string;
    password: string;
    profileImage: string;
    host: string;
    snsId: string;
    token: string;
    tokenExp: number;
    role: number;
    active: boolean;
    bookmarkList: Array<Bookmark>;
    likeList: Array<Like>;
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
        maxlength: 17,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 10,
        required: true,
    },
    profileImage: {
        type: String,
        required: false,
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
            _id: {
                type: Schema.Types.ObjectId,
                ref: 'Restaurant',
            },
            registeredAt: {
                type: String,
                required: true,
                default: () => {
                    return new Intl.DateTimeFormat('ko-KR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false,
                    }).format(new Date());
                },
            },
            groupName: {
                type: String,
                required: false,
                default: '기본 그룹',
            },
        },
    ],
    likeList: [
        {
            _id: {
                type: Schema.Types.ObjectId,
                ref: 'Restaurant',
            },
            registeredAt: {
                type: String,
                required: true,
                default: () => {
                    return new Intl.DateTimeFormat('ko-KR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false,
                    }).format(new Date());
                },
            },
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

const privateKey: string = process.env.PRIVATE_KEY?.replace(/\\n/g, '\n') || '';

const publicKey: string = process.env.PUBLIC_KEY?.replace(/\\n/g, '\n') || '';

// generateToken메서드 만들기
userSchema.method('generateToken', async function generateToken(cb: (err?: Error | null, user?: any) => any) {
    try {
        var user = this;

        if (!user._id) return cb(new Error('🚨 토큰을 생성하기 전에 사용자를 데이터베이스에 저장해야 합니다.'));

        // 몽고DB의 _id는 string이 아니기 때문에 toHexString 메서드 사용해서 형변환
        /**
         * PEM encoded RSA private key: SSL 과 같은 암호화 시스템과 함께 사용하기 위해 RSA 개인 키를 저장하는 형식
         * key file은 base64로 인코딩된 페이로드 데이터를 일반텍스트로 저장(-----BEGIN RSA PRIVATE KEY----- 포함)
         */

        jwt.sign(
            { id: this._id.toHexString(), iat: Date.now(), issuer: 'green-maps' },
            privateKey,
            {
                algorithm: 'RS256',
                expiresIn: 365 * 24 * 60 * 60, // 초 단위 주의,
            },
            async function (err, token) {
                if (err) {
                    return cb(new Error('암호화 에러'));
                }

                user.token = token;

                await user
                    .save()
                    .then((user: any) => cb(null, user))
                    .catch((err: any) => cb(err));
            }
        );
    } catch (err) {
        console.error(err);
    }
});

// findByToken메서드 만들기
userSchema.static('findByToken', function findByToken(token: string, cb: (err: Error | null, user?: any) => any) {
    try {
        var user = this;

        jwt.verify(token, publicKey, { algorithms: ['RS256'] }, async function (err: any, decoded: any) {
            if (err || !decoded || !decoded.id) cb(new Error('🚨 유효하지 않거나 만료된 토큰입니다.'));
            else {
                try {
                    const doc = await user.findOne({ _id: decoded.id, token: token }).exec();

                    if (!doc) cb(new Error('🚨 해당 유저가 없습니다.'));
                    else cb(null, user);
                } catch (err) {
                    if (err instanceof Error) cb(err);
                }
            }
        });
    } catch (err) {
        console.error(err);
    }
});

const User = model<UserInfo, UserModel>('User', userSchema);

export default User;
