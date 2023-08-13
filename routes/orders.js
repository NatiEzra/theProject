const express = require("express");
const router = express.Router();

const OrdersController = require("../controllers/orders");
//const StorePageController = require("../controllers/ourStores");


// GET route for the cart page
router.get("/myorders", OrdersController.OrderPage);


router.get("/allOrders", OrdersController.getOrders);

router.get("/allOrdersJson", OrdersController.getOrdersJson);




router.post("/createOrder", OrdersController.createOrder);

module.exports = router;