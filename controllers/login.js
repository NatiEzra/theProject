const loginService = require("../services/login");
function isLoggedIn(req, res) {
  if (req.session.username != null) return req.session.username;
  else return res.status(200).send({ message: "NULL" });;
}

function AfterLogedin(req, res) {
  res.render("Mainpage", { username: req.session.username });
}

async function loginForm(req, res) {
  //const result=await loginService.getmap();
  res.render("login", { flag: true });
}
function registerForm(req, res) {
  res.render("register", { flag: true, degel: true });
}

function termForm(req, res) {
  res.render("termandcon", {});
}
function logout(req, res) {
  req.session.destroy(() => {
    res.redirect("/Mainpage");
  });
}

async function login(req, res) {
  const { username, password } = req.body;
  const result = await loginService.login(username, password);
  req.session.isadmin=false;
  if (result) {
    let admin = result.role;
    if (admin =="admin") 
    { 
      admin=true
      req.session.isadmin=true;
    }
    else admin=false;
    req.session.isLoggedIn=true;
    req.session.username = username;
    res.render("Mainpage",{Admin:admin , loggedIn: true, username: result.username});
  } else res.render("login", { flag: result});
}

module.exports = {
  login,
  loginForm,
  termForm,
  registerForm,
  logout,
  AfterLogedin,
  isLoggedIn,
};
