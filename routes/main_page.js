const express = require("express");
const router = express.Router();

const Main_pageController = require("../controllers/mainpage");
const StorePageController = require("../controllers/ourStores");
// GET route for the cart page
router.get("/Cartpage", Main_pageController.Cartpage);

// GET route for the main page
router.get("/Mainpage", Main_pageController.Mainpage);

// GET route for the sale page
router.get("/Salepage", Main_pageController.Salepage);
 router.get("/ourStores", StorePageController.stores);
router.get("/Storelocation", StorePageController.Storepgage);

module.exports = router;
