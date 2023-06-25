const express = require("express");
const router = express.Router();

const Main_pageController = require("../controllers/mainpage");
const StorePageController = require("../controllers/ourStores");
const ItemsPageController=require("../controllers/items");
// GET route for the cart page
router.get("/Cartpage", Main_pageController.Cartpage);

// GET route for the main page
router.get("/Mainpage", Main_pageController.Mainpage);
//
router.get("/Men", ItemsPageController.Men);
router.get("/MenJson", ItemsPageController.MenJson);
// GET route for the sale page
//router.get("/Salepage", Main_pageController.Salepage);
router.get("/ourStores", StorePageController.stores);
router.get("/Storelocation", StorePageController.Storepgage);
module.exports = router;
