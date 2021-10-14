const router = require('express').Router();

const { authController }= require('../controllers');
const { userMiddleware } = require('../middlewares');

router.post('/sign-in' ,authController.loginUser);

router.post('/sign-up', userMiddleware.checkUserValidity, authController.createUser);

module.exports = router;