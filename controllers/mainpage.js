const fs = require('fs');
function Mainpage(req, res) { res.render("MainPage", {})}

function Cartpage(req, res) { res.render("ShoppingCart", {}) }

function Salepage(req,res){ res.render("Salepage", {})}

function renderStores(req,res){ res.render("ourStores", {})}

module.exports = {
Mainpage,
Cartpage,
Salepage
  }

  