const User = require("../models/User");
const StoreLocation= require('../models/StoreLocation');

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
async function getmap(){
    const storelocation= 
    await StoreLocation.find();
    return storelocation;
}
async function register(username, password) {

    const user = new User({
        username: username,
        password:paswword
    });

    await user.save()        
}

module.exports = { login, register,getmap }

