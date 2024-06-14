const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const {schema} = require('./secure/userValidation');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "نام و نام خانوادگی الزامی می باشد"],
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255,
    },
    user_type: {
        type: String,
        enum: ["admin", "supervisor", "normal", "security"],
        default: "normal",
    },
    organization_code: {
        type: Number,
        enum: [111, 112, 113, 114, 115, 1141, 1142, 1143],
        default: 111
    },
    // isLocked: {
    //     type: Boolean,
    //     default: false,
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

userSchema.statics.userValidation = function (body) {
    return schema.validate(body, { abortEarly: false });
};

userSchema.pre("save", function (next) {
    let user = this;

    if (!user.isModified("password")) return next();

    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        next();
    });
});

module.exports = mongoose.model("User", userSchema);