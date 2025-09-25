const express = require("express");
const path = require("path");
const UserApi = require("../Controllers/SignUp");
const router = express.Router();

router.post("/signup",UserApi.createData);
router.post("/login", UserApi.loginUser); // 👈 Add this

module.exports = router;