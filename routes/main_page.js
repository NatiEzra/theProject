const express = require("express");
const router = express.Router();

const Main_pageController = require("../controllers/mainpage");

// GET route for the register form
router.get("/cart_page", Main_pageController.Mainpage);

module.exports = router;
