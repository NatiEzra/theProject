const express = require("express");
const router = express.Router();

const Main_pageController = require("../controllers/mainpage");

// GET route for the cart page
router.get("/Cartpage", Main_pageController.Cartpage);

// GET route for the main page
router.get("/Mainpage", Main_pageController.Mainpage);


router.get("/Salepage", Main_pageController.Salepage);
router.get("/ourStores", Main_pageController.renderStores);

module.exports = router;
