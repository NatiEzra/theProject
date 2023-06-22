const registerService = require("../services/register")
const User = require("../models/User");
function isLoggedIn(req, res, next) {
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
}

async function register(req, res) {
  const { username, firstname , lastname , email , gender , date , password } = req.body
  try {
    await registerService.register(username, firstname , lastname , email , gender , date , password)    
    //req.session.username = username
    res.redirect('/')
  }
  catch (e) {
    const user = await User.findOne({username:username}); 
    if(user)
    {
    res.render('register',{flag:false,degel:true});
    }
    const user1 = await User.findOne({email:email}); 
    if(user1)
    {
      res.render('register',{flag:true, degel:false});
      }
  }    
}
module.exports = { 
  register,
  isLoggedIn
}


