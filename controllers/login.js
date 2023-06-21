const loginService = require("../services/login")

function isLoggedIn(req, res, next) {
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
}

function AfterLogedin(req, res) {  
  res.render("Mainpage", {username: req.session.username})
}

async function loginForm(req, res) {
  const result=await loginService.getmap();
  res.render("login",{ flag : true}) }
function registerForm(req, res) { res.render("register", {flag:true, degel:true}) }

function termForm(req, res) { res.render("termandcon", {}) }
function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/login');
  });
}

async function login(req, res) {
  
  const { username, password } = req.body
  const result = await loginService.login(username, password)
  console.log(username);
  console.log(result);

  if (result) {
    req.session.username = username
    res.redirect('/Mainpage')
  }
  else
   res.render('login',{flag:result});
}

module.exports = {
  login,
  loginForm,
  termForm,
  registerForm,
  logout,
  AfterLogedin,
  isLoggedIn
}