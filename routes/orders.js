const express = require("express");
const router = express.Router();

const OrdersController = require("../controllers/orders");
//const StorePageController = require("../controllers/ourStores");


// GET route for the cart page
router.get("/myorders/:id", OrdersController.OrderPage);






router.post("/createOrder", OrdersController.createOrder);

module.exports = router;