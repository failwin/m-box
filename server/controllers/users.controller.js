const { User } = require('../dataBase');
const { responseMessagesEnum } = require('../constants');
const { errorMessages, ErrorHandler } = require('../errors');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await User.find({});

            res.status(responseMessagesEnum.SUCCESS.code).json(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: (req, res, next) => {
        try {
            const singleUser = req.user;

            res.status(responseMessagesEnum.SUCCESS.code).json(singleUser);
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try {
            const singleUser = req.user;

            await User.findByIdAndDelete(singleUser._id);

            res.status(responseMessagesEnum.USER_DELETED.code).json(responseMessagesEnum.USER_DELETED.messages);
        } catch (e) {
            next(e);
        }
    },

    updateUserById: async (req, res, next) => {
        try {
            const singleUser = req.user;
            const dataUpdate = req.body;

            if(dataUpdate._id) {
                throw new ErrorHandler(400, errorMessages.CANT_CHANGE_ID.message, errorMessages.CANT_CHANGE_ID.code);
            }

            await User.findOneAndUpdate(singleUser, dataUpdate);

            res.status(responseMessagesEnum.USER_UPDATED.code).json(responseMessagesEnum.USER_UPDATED.messages);
        } catch (e) {
            next(e);
        }
    },
};