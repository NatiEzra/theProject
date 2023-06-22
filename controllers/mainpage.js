const fs = require('fs');
function Mainpage(req, res) { res.render("MainPage", {})}

function Cartpage(req, res) { res.render("ShoppingCart", {}) }

module.exports = {
Mainpage,
Cartpage
  }