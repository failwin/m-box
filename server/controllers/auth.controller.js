const { responseMessagesEnum, constants } = require('../constants');
const { userServices, authServices } = require('../services');


// controller
//
// service
//
// helpers
//
// data access leyer - usersDal
// cretae/get/update
//
// mongo
// mysql


module.exports = {
    createProfile: async (req, res, next) => {
        try {
            const user = await userServices.createUser(req.body);

            res.status(responseMessagesEnum.USER_CREATED.code).json(user);
        } catch (e) {
            next(e);

        }
    },

    loginProfile: async (req, res, next) => {
        try {
            const loginUser = await authServices.login(req.body)

            res.json(loginUser);
        } catch (e) {
            next(e);
        }
    },

    logoutProfile: async (req, res, next) => {
        try {
            const token = req.get(constants.AUTHORIZATION);

            await authServices.logout(token);

            res.status(204).json('success');
        } catch (e) {
            next(e);
        }
    }
}