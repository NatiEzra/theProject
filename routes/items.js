const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const ItemsPageController=require("../controllers/items");
router.get("/AllItems", ItemsPageController.AllItems);
router.get("/AllItemsJson", ItemsPageController.AllItemsJson);
router.get("/Men", ItemsPageController.Men);
router.get("/MenJson", ItemsPageController.MenJson);
router.get("/MenPants", ItemsPageController.MenPants);
router.get("/MenPantsJson", ItemsPageController.MenPantsJson);
router.get("/Women", ItemsPageController.Women);
router.get("/WomenJson", ItemsPageController.WomenJson);
router.get("/MenShoesJson", ItemsPageController.MenShoesJson);
router.get("/MenShoes", ItemsPageController.MenShoes);
router.get("/MenShirtsJson", ItemsPageController.MenShirtsJson);
router.get("/MenShirts", ItemsPageController.MenShirts);
router.get("/WomenShirtsJson", ItemsPageController.WomenShirtsJson);
router.get("/WomenShirts", ItemsPageController.WomenShirts);
router.get("/WomenPantsJson", ItemsPageController.WomenPantsJson);
router.get("/WomenPants", ItemsPageController.WomenPants);
router.get("/WomenShoesJson", ItemsPageController.WomenShoesJson);
router.get("/WomenShoes", ItemsPageController.WomenShoes);
router.get("/Users", ItemsPageController.getUsers);
router.use(bodyParser.json());
router.post("/updateCart", ItemsPageController.updateCart);
router.get("/cart", ItemsPageController.getCart);
router.post("/removeFromCart", ItemsPageController.removeFromCart);
router.post("/api/items/:id", ItemsPageController.removeItem);
router.put("/api/items/:id", ItemsPageController.UpdateItem);


module.exports = router;