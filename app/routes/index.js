const router = require('express').Router();
 
const user = require('./user.js');
const authenticate = require('./authenticate.js');
  
router.use(`/${process.env.API_PATH}/user`, user);
router.use(`/${process.env.API_PATH}/authenticate`, authenticate);

module.exports = router;