const { passwordHasher } = require('../helpers');
const { User } = require('../dataBase');
const { errorHandler, errorMessages } = require('../errors');
const { responseMessagesEnum } = require('../constants');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const { password } = req.body;

            const hashedPassword = await passwordHasher.hash(password);
            const createdUser = await User.create({...req.body, password: hashedPassword});

            res.status(responseMessagesEnum.USER_CREATED.code).json(createdUser);
        } catch (e) {
            next(e);
        }
    },

    loginUser: async (req, res, next) => {
        try {
            const { password, email } = req.body;

            const userByEmail = await User.findOne({email});

            if (!userByEmail) {
                throw new errorHandler(404, errorMessages.WRONG_EMAIL_OR_PASSWORD.message, errorMessages.WRONG_EMAIL_OR_PASSWORD.code);
            }

            await passwordHasher.compare(userByEmail.password, password);

            res.json(userByEmail);

        } catch (e) {
            next(e);
        }
    }
}