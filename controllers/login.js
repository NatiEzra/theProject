const loginService = require("../services/login")

function isLoggedIn(req, res, next) {
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
}

function foo(req, res) {  
  res.render("foo", {username: req.session.username})
}

function loginForm(req, res) { res.render("login", {}) }

function registerForm(req, res) { res.render("register", {}) }
function termForm(req, res) { res.render("termandcon", {}) }
function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/login');
  });
}

async function login(req, res) {
  
  const { username, password } = req.body
  console.log("dasdas",req.body)
  const result = await loginService.login(username, password)
  console.log(username);
  console.log(result);

  if (result) {
    //req.session.username = username
    res.redirect('/Register')
  }
  else
    res.redirect('/login?error=1')
}

module.exports = {
  login,
  loginForm,
  termForm,
  registerForm,
  logout,
  foo,
  isLoggedIn
}