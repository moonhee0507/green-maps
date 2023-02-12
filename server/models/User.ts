import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

const userSchema = new Schema({
    userId: {
        type: String,
        maxlength: 20,
        unique: 1,
    },
    nickName: {
        type: String,
        maxlength: 20,
        unique: 1,
    },
    password: {
        type: String,
        minlength: 10,
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
});

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
userSchema.methods.comparePassword = function (
    plain: string,
    cb: (err: Error | null, same: boolean | null) => void
): void {
    bcrypt.compare(plain, this.password, (err, same) => {
        if (err) return cb(err, null);
        cb(null, same);
    });
};

// generateToken메서드 만들기
userSchema.methods.generateToken = function (cb: (err?: Error | null, user?: any) => void) {
    var user = this;
    // 몽고DB의 _id는 string이 아니기 때문에 toHexString 메서드 사용해서 형변환
    const token = jwt.sign(this._id.toHexString(), 'secretToken');
    user.token = token;

    user.save(function (err: Error | null, user?: any) {
        if (err) return cb(err);
        cb(null, user);
    });
};

// findByToken메서드 만들기
userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    jwt.verify(token, 'secretToken', (err: any, decoded: any) => {
        user.findOne({ _id: decoded, token: token }, (err: any, user: any) => {
            if (err) return cb(err);
            cb(null, user);
        });
    });
};

const User = mongoose.model('User', userSchema);

export default User;
