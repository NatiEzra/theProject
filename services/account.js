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

module.exports = { FindUser }
