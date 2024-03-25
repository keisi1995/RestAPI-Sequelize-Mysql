const router = require("express").Router();

const { validateStore } = require("../Http/Validator/User");
const authMiddleware = require('../Http/Middleware/authMiddleware');
const User = require("../Http/Controller/UserController");

router.route('/')
    .get(authMiddleware, (req, res) => { 
        User.index(req, res);
    })
    .post(validateStore, (req, res) => {
        User.store(req, res);
    })

router.route('/:id_user(\\d+)')
    .get(authMiddleware, (req, res) => {
        User.show(req, res);
    })
    .put(validateStore, authMiddleware, (req, res) => {
        User.update(req, res);
    })
    .delete(authMiddleware, (req, res) => {
        User.destroy(req, res); 
    })

module.exports = router;
