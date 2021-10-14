const Joi = require('joi');
const { constants, userRolesEnum } = require('../../constants');

const taskScheme = Joi.object().keys({
    taskName: Joi.string().min(1).max(500),
    isDone: Joi.boolean().required()
});

module.exports = {
    createUser: Joi.object().keys({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().regex(constants.REGEX_EMAIL),
        password: Joi.string().required().min(5).max(256),
        role: Joi.string().allow(...Object.values(userRolesEnum)),
        tasks: Joi.array().items(taskScheme)
    })
};