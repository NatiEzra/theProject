const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');


const Main_pageController = require("../controllers/mainpage");
const StorePageController = require("../controllers/ourStores");


// GET route for the cart page
router.get("/Cartpage", Main_pageController.Cartpage);

// GET&Post route for the myaccount page
router.get("/myaccount", Main_pageController.Myaccount);
router.post("/updateUser", Main_pageController.updateUser);

router.get("/allEmails", Main_pageController.getEmails);

// GET route for the myaccount page
router.get("/SavedItems", Main_pageController.SavedItems);


// GET route for the main page
router.get("/Mainpage", Main_pageController.Mainpage);
//
router.get("/ItemGender", Main_pageController.GetItemsPerGender);
// GET route for the error page
router.get("/ErrorPage", Main_pageController.Error);


// GET route for the sale page
//router.get("/Salepage", Main_pageController.Salepage);
router.get("/ourStores", StorePageController.stores);
router.get("/Storelocation", StorePageController.Storepgage);
router.get("/editStores", StorePageController.editStores);

router.use(bodyParser.json());
router.post("/deleteBranch", StorePageController.deleteBranch);
router.post("/updateBranch", StorePageController.updateBranch);
router.post("/createBranch", StorePageController.createBranch);

module.exports = router;
