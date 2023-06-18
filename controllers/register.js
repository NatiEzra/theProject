const registerService = require("../services/register")

function isLoggedIn(req, res, next) {
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
}

async function register(req, res) {
  console.log(req.body);
  const { username, firstname , lastname , email , gender , date , password } = req.body
  try {
    await registerService.register(username, firstname , lastname , email , gender , date , password)    
    //req.session.username = username
    res.redirect('/')
  }
  catch (e) { 
    res.redirect('/register?error=1')
  }    
}

module.exports = { 
  register,
  isLoggedIn
}