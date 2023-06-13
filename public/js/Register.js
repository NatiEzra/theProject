addEventListener("email", isValid)
function register()
{
    var userName = document.getElementById("userName").value;
   /* if(userName.length>30 || userName=="")
    {
        document.getElementById('Error').classList.add('Error_start');
        document.getElementById('Error').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('Error').classList.remove('Error_start');
            document.getElementById('Error').classList.add('Error_NoShow');
        }, "1300");
        return;
    }
    document.getElementById("firstName").value=="" || document.getElementById("lastName").value==""
    ||  document.getElementById("email").value=="" ||  document.getElementById("date").value=="" ||  document.getElementById("gender").value=="" || 
      if ( document.getElementById("firstName").value=="" || document.getElementById("lastName").value==""
   ||  document.getElementById("email").value=="" ||  document.getElementById("date").value=="" ||  document.getElementById("gender").value=="" || 
   document.getElementById("password").value=="" || document.getElementById("Verifypassword").value=="" )
    */
 
   
    if(userName.length>30 || userName=="")
    {
        document.getElementById('userNameError').classList.add('Error_start');
        document.getElementById('userNameError').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('userNameError').classList.remove('Error_start');
            document.getElementById('userNameError').classList.add('Error_NoShow');
        }, "1300");
        return;
    }
    if (document.getElementById("firstName").value=="")
    {
        
        document.getElementById('lengthError').classList.add('Error_start');
        document.getElementById('lengthError').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('lengthError').classList.remove('Error_start');
            document.getElementById('lengthError').classList.add('Error_NoShow');
        }, "1300");
      return;  
    }
    if (document.getElementById("lastName").value=="")
    {
        
        document.getElementById('lastNameError').classList.add('Error_start');
        document.getElementById('lastNameError').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('lastNameError').classList.remove('Error_start');
            document.getElementById('lastNameError').classList.add('Error_NoShow');
        }, "1300");
     return;   
    }
    if (  document.getElementById("email").value=="")
    {
        
        document.getElementById('noEmail').classList.add('Error_start');
        document.getElementById('noEmail').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('noEmail').classList.remove('Error_start');
            document.getElementById('noEmail').classList.add('Error_NoShow');
        }, "1300");
        return;   
    }
   
    if (  document.getElementById("gender").value=="")
    {
        
        document.getElementById('genderError').classList.add('Error_start');
        document.getElementById('genderError').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('genderError').classList.remove('Error_start');
            document.getElementById('genderError').classList.add('Error_NoShow');
        }, "1300");
        return;
    }

    if (  document.getElementById("date").value=="")
    {
        
        document.getElementById('dateError').classList.add('Error_start');
        document.getElementById('dateError').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('dateError').classList.remove('Error_start');
            document.getElementById('dateError').classList.add('Error_NoShow');
        }, "1300");
        return;
    }
   
    if (  document.getElementById("password").value=="")
    {
        
        document.getElementById('passwordError').classList.add('Error_start');
        document.getElementById('passwordError').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('passwordError').classList.remove('Error_start');
            document.getElementById('passwordError').classList.add('Error_NoShow');
        }, "1300");
        return;
    }
    if (  document.getElementById("Verifypassword").value=="")
    {
        
        document.getElementById('passwordVerifyError').classList.add('Error_start');
        document.getElementById('passwordVerifyError').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('passwordVerifyError').classList.remove('Error_start');
            document.getElementById('passwordVerifyError').classList.add('Error_NoShow');
        }, "1300");
        return;
    }
    if( !(document.getElementById("termsOfConditions").checked)) 
    {
    document.getElementById('checkBoxError').classList.add('Error_start');
    document.getElementById('checkBoxError').classList.remove('Error_NoShow');
    setTimeout(() => {
        document.getElementById('checkBoxError').classList.remove('Error_start');
        document.getElementById('checkBoxError').classList.add('Error_NoShow');
    }, "1300");
    return;
}
    if (!validPassword())
    {
        document.getElementById('passwordsError').classList.add('Error_start');
        document.getElementById('passwordsError').classList.remove('Error_NoShow');
        setTimeout(() => {
            document.getElementById('passwordsError').classList.remove('Error_start');
            document.getElementById('passwordsError').classList.add('Error_NoShow');
        }, "1300");
        return;
    }
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("date").value;
    var password = document.getElementById("password").value;
    var Verifypassword = document.getElementById("Verifypassword").value;
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
function validPassword()
{
    
    if(document.getElementById("password").value===document.getElementById("Verifypassword").value)
    return true;
    return false;

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


  
  
  
  