function toggleForm() {
    var formContainer = $("#formContainer");
    if (formContainer.hasClass("form-container-hidden")) {
      if ($('#manageUsersForm').css('display') === 'block') {
        $('#manageUsersForm').toggle();
      } 
      formContainer.removeClass("form-container-hidden");
      formContainer.addClass("form-container-add");
    } else {
      formContainer.removeClass("form-container-add");
      formContainer.addClass("form-container-hidden");
    }
  }
  
  $("#AddItem").click(function() {
    toggleForm();
  });
  $("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:70/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        Swal.fire({
        title: 'Success',
        text: "Data Updated Successfully!",
        icon: 'success',
        confirmButtonText: 'OK'
        })
    })

});
if(window.location.pathname == "/management"){
  $ondelete = $(".table tbody td a.delete");
  const message = 
  $ondelete.click(function(){
      var id = $(this).attr("data-id");

      var request = {
          "url" : `http://localhost:70/api/users/${id}`,
          "method" : "DELETE"
      }

      Swal.fire({
        title: 'Confirmation',
        text: 'Do you really want to delete this record?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          $.ajax(request).done(function(response) {
            Swal.fire({
              title: 'Success',
              text: response.message,
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              location.reload(); // Refresh the page
            });
          });
        } else {
          // User clicked "Cancel" or closed the alert
          // Do nothing or perform any desired action
        }
      });

  })
}
$(document).ready(function() {
  // Hide the form initially
  //$('#manageUsersForm').hide();

  // Add click event handler to the "Manage Users" link
  $('#manageUsers').click(function(e) {
    e.preventDefault(); // Prevent the default link behavior
    if ($('#formContainer')[0].classList.contains('form-container-add')) {
      $('#formContainer')[0].classList.add('form-container-hidden');
      $('#formContainer')[0].classList.remove('form-container-add');
    }
      $('#manageUsersForm').toggle(); // Toggle the visibility of the form
  });
});