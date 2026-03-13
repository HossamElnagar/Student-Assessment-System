//require express
const express = require("express");
// create router from express
const router = express.router();
//import cotrllers
const{studentLogOut,studentRegister,studentLogin} = require("../Controllers/authStudentController")

router.post("/register",studentRegister);

router.post("/login",studentLogin);

router.get("/logout",studentLogOut);

module.exports = router;