const User = require("../models/User");

async function login(username, password) {
    console.log(username,password);
    const user = await User.findOne({ username: username, password:password });
    console.log('User',user);
    return user != null
}

async function register(username, password) {

    const user = new User({
        username: username,
        password
    });

    await user.save()        
}

module.exports = { login, register }