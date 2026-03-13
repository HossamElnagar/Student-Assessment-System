//require express
const express = require("express");
// create router from express
const router = express.router();

//import controllers

const { teacherRegister, teacherLogin, teacherLogOut }= require("../Controllers/authTeacherController");

//routes
router.post("/register",teacherRegister);

router.post("/login",teacherLogin);

router.get("/logout",teacherLogOut);



module.exports = router;