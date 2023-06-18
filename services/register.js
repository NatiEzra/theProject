const User = require("../models/User");
//const RegistUser = require("../models/Register");

async function login(username, password) {
    const user = await User.findOne({ username: username, password });
    return user != null
}

async function register(username, firstname , lastname , email , gender , date , password) {
    console.log(username, firstname , lastname , email , gender , date , password);
    const user2 = await User.find({});
    console.log(user2);
    const user = new User({
        username: username,
        firstname : firstname , 
        lastname : lastname,
        email : email,
        gender , gender,
        date: date,
        password:password
    });
    await user.save()        
}

module.exports = { login, register }