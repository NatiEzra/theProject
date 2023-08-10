const User = require("../models/User");


async function FindUser(username) {
    const user = await User.findOne({username:username});  
    if(user!==null)
        return user
    else
    {
        return false;
    }
}
async function UpdateUser(updatedUser, res)
{
  let bool;
 await User.findOneAndUpdate({ username: updatedUser.username }, { firstname:updatedUser.firstname, lastname:updatedUser.lastname, email:updatedUser.email,password:updatedUser.password }, { new: true })
  .then(updatedUser => {
     if (updatedUser) {
      bool= true;
    } else {
      bool= false;
    }
  })
  .catch(error => {
    bool=  false;
  });
  return bool;
}

module.exports = { FindUser,UpdateUser }
