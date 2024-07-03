const express = require("express");
const authenticationController = require("../controllers/authentication.controllers");
const router = express.Router();

router.post("/signup",authenticationController.signUp);
module.exports={router}