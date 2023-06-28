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
    res.render("Men", {Admin: admin, loggedIn: false });
  }
  async function MenPantsJson(req,res){
    const MenPants=await itemService.getMenPants();
      res.json(MenPants);
    }
    async function MenPants(req, res){
       
      const admin=req.session.isadmin;
      res.render("MenPants", {Admin: admin, loggedIn: false });
    }
  async function Women(req, res){
    const admin=req.session.isadmin;
    res.render("Women", {Admin: admin, loggedIn: false });
  
  }
  async function WomenJson(req,res){
    const WomenItems=await itemService.getWomenItems();
      res.json(WomenItems);
    }
    
module.exports = {
    additems,
    MenJson,
    Men,
    MenPantsJson,
    MenPants,
    Women,
    WomenJson
  }