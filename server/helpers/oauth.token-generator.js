const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { errorMessages, ErrorHandler } = require('../errors');
const { constants } = require('../constants');

const verifyPromise = promisify(jwt.verify);

module.exports = {
    generateTokenPair: (payload) => {
        const accessToken = jwt.sign(payload, constants.ACCESS_TOKEN_SECRET, {expiresIn: '10m'});
        const refreshToken = jwt.sign(payload, constants.REFRESH_TOKEN_SECRET, {expiresIn: '30d'});

        return {
            accessToken,
            refreshToken
        }
    },

    verifyToken: async (token, tokenType = 'access') => {
        const secretWord = tokenType === 'access' ? constants.ACCESS_TOKEN_SECRET : constants.REFRESH_TOKEN_SECRET;

        const verify = await verifyPromise(token, secretWord);

        if(!verify) {
            throw new ErrorHandler(401, errorMessages.USER_NOT_AUTHORIZED.message, errorMessages.USER_NOT_AUTHORIZED.code);
        }
    }
}