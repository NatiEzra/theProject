const promocodeService = require("../services/promocode");



async function getPromo(req,res){
      const all=await promocodeService.getpromocodes();
        res.json(all);
      }
      
async function updatePromo(req,res){
    const updatedPromoUser = req.body;
    promocodeService.updatePromo(updatedPromoUser, res);
    }

module.exports = {
    getPromo,
    updatePromo
}