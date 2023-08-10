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
  User.findOneAndUpdate({ username: updatedUser.username }, { firstname:updatedUser.firstname, lastname:updatedUser.lastname, email:updatedUser.email,password:updatedUser.password }, { new: true })
  .then(updatedUser => {
     if (updatedUser) {
      res.status(200).json({ message: "User updated successfully." });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  })
  .catch(error => {
    res.status(500).json({ message: "Error updating user.", error: error.message });
  });
}

module.exports = { FindUser,UpdateUser }
