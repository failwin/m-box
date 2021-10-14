const router = require('express').Router();

const { usersController }= require('../controllers');
const { userMiddleware }= require('../middlewares');

router.get('/', usersController.getAllUsers);

router.get('/:userId', userMiddleware.checkIsUserPresent ,usersController.getUserById);

router.delete('/:userId', userMiddleware.checkIsUserPresent ,usersController.deleteUserById);

router.put('/:userId', userMiddleware.checkIsUserPresent ,usersController.updateUserById);

module.exports = router;