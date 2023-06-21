const User = require("../models/User");

async function login(username, password) {
    console.log(username);
    console.log(password);
    const user = await User.findOne({username:username,password:password });
    if(user!==null)
        return user
    else
    {
        console.log("here2");
        const user2 = await User.findOne({ username: username});
        if(user2==null)
        {
              /*console.log("here3");
                document.getElementById('userError').classList.add('Error_start');
                console.log("here4");
                document.getElementById('userError').classList.remove('Error_NoShow');
                setTimeout(() => {
                    document.getElementById('userError').classList.remove('Error_start');
                    document.getElementById('userError').classList.add('Error_NoShow');
                }, "1300");
                return;
                */
                return "Invalid username";
    }
     else {
      return "Invalid password";
    } 
      
           
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