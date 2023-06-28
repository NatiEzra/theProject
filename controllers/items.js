const itemService = require("../services/items");

function additems(req, res) {
  itemService.addItemWithImage();
}
async function MenJson(req,res){
  const MenItems=await itemService.getitems();
    res.json(MenItems);
  }
  async function Men(req, res){
     
    res.render("Men", {});
  }
  async function Women(req, res){
   
    res.render("Women", {});
  }
  async function WomenJson(req,res){
    const WomenItems=await itemService.getWomenItems();
      res.json(WomenItems);
    }
    
module.exports = {
    additems,
    MenJson,
    Men,
    Women,
    WomenJson
  }