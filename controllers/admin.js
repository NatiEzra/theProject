const AdminService = require("../services/admin");


function Adminpage(req, res) {
    let isAdmin = req.session.isadmin;
    let username = req.session.username;

    if (isAdmin === true) {
      res.render("Management", { loggedIn: true, username: username, Admin: isAdmin });
    } else {
     // res.status(404) // Render the 404 error page
     res.redirect("/ErrorPage");   // Render the 404 error page
    }
  }
async function Additem(req, res) {
    const { name, type , gender , price , details ,single_input } = req.body
    await AdminService.AddItem(req,res,name, type , gender , price , details ,single_input);   
    //res.redirect('/Mainpage');
  
  }

module.exports = {
    Adminpage,
    Additem
  }