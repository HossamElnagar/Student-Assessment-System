const express = require("express");

const router = express.Router()

const {parentLogOut,parentRegister,parentLogin}=require("../Controllers/authParentController")

router.post("/register",parentRegister);

router.post("/login",parentLogin);

router.get("/logout",parentLogOut);


module.exports = router;