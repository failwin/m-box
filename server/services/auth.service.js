const { User, OAuth } = require('../dataBase');
const { errorHandler, errorMessages } = require('../errors');
const { passwordHasher, oAuthTokenGenerator } = require('../helpers');

module.exports = {
    login: async (data) => {
        const { password, email } = data;

        const userByEmail = await User.findOne({email}).select('+password');

        if (!userByEmail) {
            throw new errorHandler(404, errorMessages.WRONG_EMAIL_OR_PASSWORD.message, errorMessages.WRONG_EMAIL_OR_PASSWORD.code);
        }

        await passwordHasher.compare(userByEmail.password, password);

        const tokenPair = oAuthTokenGenerator.generateTokenPair({email});

        await OAuth.create({...tokenPair, user: userByEmail});

        const resUser = {
            ...tokenPair,
            user: {
                email: userByEmail.email,
                id: userByEmail._id,
                name: userByEmail.name
            }
        };

        return resUser;
    },

    logout: async (token) => {
        await OAuth.findOneAndDelete({accessToken: token});
    }
}