const { Schema, model} = require('mongoose');
const { userRolesEnum } = require('../../constants');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(userRolesEnum),
        default: userRolesEnum.USER
    },
    tasks: {
        type: Array,
        default: []
    }
}, { timestamps: true });

module.exports = model(userRolesEnum.USER, userSchema);