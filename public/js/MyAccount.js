

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

    firstName = $("#firstName").val();
    lastName = $("#lastName").val();
    eMail = $("#eMail").val();
    newpassword=$("#NewPassword").val();
    password=$("#password").val();
    Users.forEach(async function (user)
     {
      if (user.email === eMail && user.email!=foundUser.email)
       {
        await Swal.fire({
          title: 'Error',
          text: "Promocode was already used",
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

        await $.ajax(updateUser).done(function(response) {
          if(response.message=='User updated successfully.')
          Swal.fire({
            title: 'Success',
            text: "Item added to cart successfully",
            icon: 'success',
            confirmButtonText: 'OK'
            })      
        });
      }  
      
    


