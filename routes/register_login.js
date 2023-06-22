const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login");
const registerController = require("../controllers/register");

// GET route for the register form
router.get("/register", loginController.registerForm);

// POST route for handling the form submission
router.post("/register", registerController.register);

// GET route for the login form
router.get("/login", loginController.loginForm);

// GET route for the terms form
router.get("/term", loginController.termForm);

// POST route for handling the login form submission
router.post("/login", loginController.login);

// GET route for logging out
router.get('/logout', loginController.logout);

// GET route for a protected route (requires authentication)
//router.get('/Mainpage', loginController.isLoggedIn, loginController.AfterLogedin);



module.exports = router;
