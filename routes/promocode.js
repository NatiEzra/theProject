const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const promoPageController=require("../controllers/promocode");

router.get("/getPromo", promoPageController.getPromo);
router.post("/updatePromo", promoPageController.updatePromo);

module.exports = router;