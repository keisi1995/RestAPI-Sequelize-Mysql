const router = require('express').Router();

const { validateStore } = require('../http/validator/user');
const authMiddleware = require('../http/middleware/authMiddleware');
const User = require('../http/controller/userController');

router.route('/')
    .get(authMiddleware, User.index)
    .post(validateStore, User.store)

router.route('/:id_user(\\d+)')
    .get(authMiddleware, User.show)
    .put(validateStore, authMiddleware, User.update)
    .delete(authMiddleware, User.destroy)

module.exports = router;
