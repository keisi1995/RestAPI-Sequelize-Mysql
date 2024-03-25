const router = require("express").Router();

const { validateLogin } = require("../Http/Validator/User");
const Auth = require("../Http/Controller/AuthenticateController");

router.route('/')
    .post(validateLogin, (req, res) => { 
        Auth.login(req, res); 
    })

module.exports = router;
