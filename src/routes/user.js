const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");
const loginValidation = require("../middlewares/userLoginValidations");

router.get("/login",controller.login)

router.get("/register",controller.register)

router.post("/access",loginValidation,controller.access)

module.exports = router;