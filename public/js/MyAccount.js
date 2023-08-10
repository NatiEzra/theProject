

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
      return;
    }
    Users.forEach(async function (user)
     {
      if ((user.email === eMail && user.email!==foundUser.email))
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
        
      
    


