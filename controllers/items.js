const itemService = require("../services/items");

function additems(req, res) {
  itemService.addItemWithImage();
}
module.exports = {
    additems
  }