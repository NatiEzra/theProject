const User = require("../models/User");
const promocode = require("../models/promocode");


async function getpromocodes(){
    const allpromocodes= 
    await promocode.find();
    return allpromocodes;
  }
  async function updatePromo(promo,res){
  {
    promocode.findOneAndUpdate({ promocodename: promo.promocodename }, { users: promo.users }, { new: true })
    .then(promo => {
       if (promo) {
        res.status(200).json({ message: "users array updated successfully." });
      } else {
        res.status(404).json({ message: " promo array dont find." });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Error updating promo array.", error: error.message });
    });
  }
  }

module.exports = { 
    getpromocodes,
    updatePromo
}


 