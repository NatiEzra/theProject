addEventListener("email", isValid)
function register()
{
    var userName = document.getElementById("userName").value;
    if(userName.length>30 || userName=="")
    {
        document.getElementById('Error').classList.add('Error_start');
        document.getElementById('Error').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('Error').classList.remove('Error_start');
            document.getElementById('Error').classList.add('Error_NoShow');
        }, "1000");
        return;
    }
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var password = document.getElementById("password").value;
    var conditions = document.getElementById("termsOfConditions").checked;

    var account = {
        userName:userName,
        firstName: firstName,
        lastName:lastName,
        email:email,
        gender:gender,
        password:password,
        date:date
    }
}
function visiblePassword()
{
    var pass=document.getElementById("password")
    if(pass.type=="password")
    {
        pass.type="text"
    }
    else
    {
        pass.type="password"
    }
}
function isValid()
{

}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
  
    if (!emailInput.validity.valid) {
      errorDiv.style.display = "block";
    } else {
      errorDiv.style.display = "none";
    }
  }
  document.getElementById("email").addEventListener("input", validateEmail);


  
  
  
  