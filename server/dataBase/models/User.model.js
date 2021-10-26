const { Schema, model} = require('mongoose');
const { dataBaseTableEnum, userRolesEnum } = require('../../constants');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(userRolesEnum),
        default: userRolesEnum.USER
    }
}, { timestamps: true });

module.exports = model(dataBaseTableEnum.USER, userSchema);