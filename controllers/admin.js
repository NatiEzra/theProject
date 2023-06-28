//const itemService = require("../services/admin");

function Adminpage(req, res) {
    let isAdmin = req.session.isadmin;
    let username = req.session.username;

    if (isAdmin === true) {
      res.render("Management", { loggedIn: true, username: username, Admin: isAdmin });
    } else {
      res.status(404) // Render the 404 error page
    }
  }
function Additem(req, res) {
    let isAdmin = req.session.isadmin;
    let username = req.session.username;

    if (isAdmin === true) {
      res.render("Management", { loggedIn: true, username: username, Admin: isAdmin });
    } else {
      res.status(404) // Render the 404 error page
    }
  }

module.exports = {
    Adminpage,
    Additem
  }