

$(document).ready(function() {
    $("#reset").click(function() {
      $("#firstName").val(firstName );
      $("#lastName").val(lastName);
      $("#eMail").val(eMail);
      $("#password").val(password);

    });
  
    SaveData();
  });
  
   function SaveData() {
    firstName = $("#firstName").val();
    lastName = $("#lastName").val();
    eMail = $("#eMail").val();
    password=$("#password").val();
  }
  
  async function UpdateUser() {
    const userResponse = await $.ajax({
      url: "http://localhost:70/Users",
      method: "GET",
    });
   var username=$('#username')[0].textContent;
    console.log(userResponse);

    const Users = userResponse;
    let foundUser = null;

    Users.forEach(function (user) {
      if (user.username === username) {
        foundUser = user;     
      }
    });
    if(foundUser==null)
    return;
    var flag=false;
    firstName = $("#firstName").val();
    lastName = $("#lastName").val();
    eMail = $("#eMail").val();
    const elementEmail = document.getElementById("eMail");
    newpassword=$("#NewPassword").val();
    password=$("#password").val();
    if (!elementEmail.checkValidity()) {
      await Swal.fire({
        title: 'Error',
        text: "Invalid email format",
        icon: 'error',
        confirmButtonText: 'OK'
      });
      eMail=foundUser.email;
      return;
    }

    var letters=/^[\p{L}a-zA-Zа-яА-Я]+$/u; //allowing the name to have letters in all langueges (p{L}=Uncode)
    if (firstName==""||!firstName.match(letters)||firstName.length>30||lastName==""||!lastName.match(letters)||lastName.length>30){
      await Swal.fire({
        title: 'Error',
        text: "Invalid name format",
        icon: 'error',
        confirmButtonText: 'OK'
      });
      firstName=foundUser.firstname;
      lastName=foundUser.lastname;
      return;
    }
    const emails = await $.ajax({
      url: "http://localhost:70/allEmails",
      method: "GET",
    });
    emails.forEach(async function (email)
     {
      if ((email === eMail && email!==foundUser.email))
       {
        flag=true;
        await Swal.fire({
          title: 'Error',
          text: "Email is already used by another user",
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return;
      }
    })
    if(newpassword!="" && newpassword!=password)
    {
      foundUser.password=newpassword;
    }
    foundUser.firstname=firstName;
    foundUser.lastname=lastName;
    foundUser.email=eMail;

        const updateUser = {
          "url": "http://localhost:70/updateUser",
          "method": "POST",
          "data": { "foundUser": foundUser }, // Convert the user object to JSON         
        };
        const response = await $.ajax(updateUser);
        if (response.message === 'User updated successfully.') {
          Swal.fire({
            title: 'Success',
            text: "User updated successfully",
            icon: 'success',
            confirmButtonText: 'OK'
          });
        $("#password").val(foundUser.password);
        $("#NewPassword").val("");

        }
      else {
        if(!flag)
        {
        // Handle error as needed
        Swal.fire({
          title: 'Error',
          text: "An error occurred while updating the user",
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
    }
        
      
    


