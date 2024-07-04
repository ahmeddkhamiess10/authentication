const express = require("express");
const authenticationController = require("../controllers/authentication.controllers");
const validate = require("../middlewares/validation.middlewares");
const { signupSchema } = require("../validation/validation");
const router = express.Router();

router.post("/signup",validate(signupSchema,'body'),authenticationController.signUp);
router.post("/login", authenticationController.login);
module.exports={router}