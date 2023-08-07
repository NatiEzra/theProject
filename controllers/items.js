const itemService = require("../services/items");

function additems(req, res) {
  itemService.addItemWithImage();
}
async function MenJson(req,res){
  const MenItems=await itemService.getitems();
    res.json(MenItems);
  }
  async function Men(req, res){
    
    const admin=req.session.isadmin;
    if ('isLoggedIn' in req.session) {
      const name=req.session.username;
      res.render("Men", {Admin: admin, loggedIn: true, username:name});
    } else {
      res.render("Men", {Admin: admin, loggedIn: false });
    }
    

  }
  async function MenJson(req,res){
    const MenItems=await itemService.getMenItems();
      res.json(MenItems);
    }
    async function Men(req, res){
      
      const admin=req.session.isadmin;
      if ('isLoggedIn' in req.session) {
        const name=req.session.username;
        res.render("Men", {Admin: admin, loggedIn: true, username:name});
      } else {
        res.render("Men", {Admin: admin, loggedIn: false });
      }
      
  
    }

  async function MenPantsJson(req,res){
    const MenPants=await itemService.getMenPants();
      res.json(MenPants);
    }
    async function MenPants(req, res){
       
      const admin=req.session.isadmin;
      if ('isLoggedIn' in req.session) {
        const name=req.session.username;
        res.render("MenPants", {Admin: admin, loggedIn: true, username:name});
      } else {
        res.render("MenPants", {Admin: admin, loggedIn: false});
      }
    }

    async function AllItemsJson(req,res){
      const all=await itemService.getitems();
        res.json(all);
      }
      async function AllItems(req, res){
         
        const admin=req.session.isadmin;
        if ('isLoggedIn' in req.session) {
          const name=req.session.username;
          res.render("AllItems", {Admin: admin, loggedIn: true, username:name});
        } else {
          res.render("AllItems", {Admin: admin, loggedIn: false});
        }
      }

  async function Women(req, res){
    const admin=req.session.isadmin;
    if ('isLoggedIn' in req.session) {
      const name=req.session.username;
      res.render("Women", {Admin: admin, loggedIn: true, username:name});
    } else {
      res.render("Women", {Admin: admin, loggedIn: false });
    }
  
  }
  async function WomenJson(req,res){
    const WomenItems=await itemService.getWomenItems();
      res.json(WomenItems);
    }
    
    async function MenShoes(req, res){
      const admin=req.session.isadmin;
      if ('isLoggedIn' in req.session) {
        const name=req.session.username;
        res.render("MenShoes", {Admin: admin, loggedIn: true, username:name});
      } else {
        res.render("MenShoes", {Admin: admin, loggedIn: false });
      }
    
    }
    async function MenShoesJson(req,res){
      const MenShoesItems=await itemService.getMenShoes();
        res.json(MenShoesItems);
      }

      
    async function MenShirts(req, res){
      const admin=req.session.isadmin;
      if ('isLoggedIn' in req.session) {
        const name=req.session.username;
        res.render("MenShirts", {Admin: admin, loggedIn: true, username:name});
      } else {
        res.render("MenShirts", {Admin: admin, loggedIn: false });
      }
    
    }
    async function MenShirtsJson(req,res){
      const MenShirtsItems=await itemService.getMenShirts();
        res.json(MenShirtsItems);
      }
      async function WomenShirts(req, res){
        const admin=req.session.isadmin;
        if ('isLoggedIn' in req.session) {
          const name=req.session.username;
          res.render("WomenShirts", {Admin: admin, loggedIn: true, username:name});
        } else {
          res.render("WomenShirts", {Admin: admin, loggedIn: false });
        }
      
      }
      async function WomenShirtsJson(req,res){
        const WomenShirtsItems=await itemService.getWomenShirts();
          res.json(WomenShirtsItems);
        }

        async function WomenPants(req, res){
          const admin=req.session.isadmin;
          if ('isLoggedIn' in req.session) {
            const name=req.session.username;
            res.render("WomenPants", {Admin: admin, loggedIn: true, username:name});
          } else {
            res.render("WomenPants", {Admin: admin, loggedIn: false });
          }
        
        }
        async function WomenPantsJson(req,res){
          const WomenPantsItems=await itemService.getWomenPants();
            res.json(WomenPantsItems);
          }
          async function WomenShoes(req, res){
            const admin=req.session.isadmin;
            if ('isLoggedIn' in req.session) {
              const name=req.session.username;
              res.render("WomenShoes", {Admin: admin, loggedIn: true, username:name});
            } else {
              res.render("WomenShoes", {Admin: admin, loggedIn: false });
            }
          
          }
          async function WomenShoesJson(req,res){
            const WomenPantsItems=await itemService.getWomenShoes();
              res.json(WomenPantsItems);
            }
            async function getUsers(req,res)
            {
              const allUsers=await itemService.getAllUsers();
              res.json(allUsers);
            }
module.exports = {
    additems,
    MenJson,
    Men,
    MenPantsJson,
    MenPants,
    Women,
    WomenJson,
    MenShoes,
    MenShoesJson,
    MenShirtsJson,
    MenShirts,
    WomenShirtsJson,
    WomenShirts,
    WomenPantsJson,
    WomenPants,
    WomenShoesJson,
    WomenShoes,
    AllItems,
    AllItemsJson,
    getUsers,
  }