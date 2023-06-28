const express = require("express");
const router = express.Router();

 const Admin_pageController = require("../controllers/admin");
// const StorePageController = require("../controllers/ourStores");
// const ItemsPageController=require("../controllers/items");


// GET route for the Managment page
router.get("/management", Admin_pageController.Adminpage);

module.exports = router;
