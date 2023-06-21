const User = require("../models/User");

async function login(username, password) {
    console.log(username);
    console.log(password);
    const user = await User.findOne({username:username,password:password });
    if(user!==null)
        return user
    else
    {
        return false;
    }
}

async function register(username, password) {

    const user = new User({
        username: username,
        password:paswword
    });

    await user.save()
}

module.exports = { login, register }
