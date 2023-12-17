"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    fullname: {
        type: String,
        required: [true, 'fullname is required!'],
    },
    password: {
        type: String,
        required: [true, 'password is required!'],
    },
    email: {
        type: String,
        required: [true, 'email is required!'],
        unique: true,
    },
}, {
    timestamps: true
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
