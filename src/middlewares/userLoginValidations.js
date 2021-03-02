const {body} = require('express-validator');
const User = require("../database/models/user");
module.exports = [
  body('email').isEmail(),
  body('password').isLength({min: 6 }),
]