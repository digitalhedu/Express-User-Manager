const { validationResult } = require('express-validator');
const User = require("../database/models/user");
module.exports = {
    login: (req,res) => res.render('user/login'),
    register: (req,res) => res.render('user/register'),
    save: (req,res) => {
        
    },
    access: (req,res) => {
        const errors = validationResult(req);

        return res.status(400).json({errors: errors.mapped()})
        if (!errors.isEmpty()) {
          return res.render('user/login',{ errors: errors.mapped() });
        }else{
            req.session.user = User.findUserByEmail(req.body.email);
            return res.redirect()
        }
    },
}