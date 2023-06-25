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
module.exports = {
    additems,
    MenJson,
    Men
  }