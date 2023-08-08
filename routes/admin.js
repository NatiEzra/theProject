const express = require("express");
const router = express.Router();

 const Admin_pageController = require("../controllers/admin");
// const StorePageController = require("../controllers/ourStores");
// const ItemsPageController=require("../controllers/items");


// GET route for the Managment page
router.get("/management", Admin_pageController.Adminpage);

// POST route for new item
router.post("/management", Admin_pageController.Additem);


router.get('/update-user', Admin_pageController.Update_user_page);

//router.get('/api/users', Admin_pageController.find_user);

router.get('/api/users', Admin_pageController.find_user)

router.put('/api/users/:id', Admin_pageController.Update_user);

router.delete('/api/users/:id', Admin_pageController.Delete_user);

router.get('/add-user', Admin_pageController.Add_user_Form);

router.post('/api/users', Admin_pageController.check_username ,Admin_pageController.CreateUser)

router.post('/post-form-route', Admin_pageController.PostFacebook)

module.exports = router;
