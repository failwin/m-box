const { User } = require('../dataBase');
const { userValidator } = require('../validators');

module.exports = {
    checkIsUserPresent: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const userById = await User.findById(userId);

            if(!userById) {
                throw new errorHandler(404, errorMessages.USER_NOT_FOUND.message, errorMessages.USER_NOT_FOUND.code);
            }

            req.user = userById;
            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserValidity: async (req, res, next) => {
        try {
            const { error } = userValidator.createUser.validate(req.body);

            if(error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
}