

function toggleForm() {
    var formContainer = $("#formContainer");
    if (formContainer.hasClass("form-container-hidden")) {
      if ($('#manageUsersForm').css('display') === 'block') {
        $('#manageUsersForm').toggle();
      } 
      if ($('#PostFacebook_Container')[0].classList.contains('form-container-add')) {
        $('#PostFacebook_Container')[0].classList.add('form-container-hidden');
        $('#PostFacebook_Container')[0].classList.remove('form-container-add');
      }
      formContainer.removeClass("form-container-hidden");
      formContainer.addClass("form-container-add");
    } else {
      formContainer.removeClass("form-container-add");
      formContainer.addClass("form-container-hidden");
    }
  }
  try{
  $('#datatable').DataTable({
    paging: true, // Enable pagination
    pageLength: 5, // Set the number of rows per page to 5
    lengthMenu: [5, 10, 15], // Customize the page length options


  });
}catch(e)
{}
  function toggle_Facebook_Form() {
    // $('#PostFacebook_Container').addClass("form-container-add");
    // $('#PostFacebook_Container').removeClass("form-container-hidden");
    if ($('#PostFacebook_Container').hasClass("form-container-hidden")) {
      $('#PostFacebook_Container').addClass("form-container-add");
      $('#PostFacebook_Container').removeClass("form-container-hidden");
    }
    else{
      if ($('#PostFacebook_Container').hasClass("form-container-add")) {
        $('#PostFacebook_Container').removeClass("form-container-add");
        $('#PostFacebook_Container').addClass("form-container-hidden");
      }
    }
    if (($('#formContainer')[0].classList.contains('form-container-add')) || (!($('#formContainer')[0].classList.contains('form-container-hidden')))) {
      $('#formContainer').addClass("form-container-hidden");
    }
    if ($('#manageUsersForm').css('display') === 'block') {
      $('#manageUsersForm').toggle();
    } 
    
    if (($('#manageUsersForm')[0].classList.contains('form-container-add')) || (!($('#manageUsersForm')[0].classList.contains('form-container-hidden')))) {
      $('#manageUsersForm').addClass("form-container-hidden");
    }
  }
  $("#AddItem").click(function() {
    toggleForm();
  });
  $("#PostFacebook").click(function() {
    toggle_Facebook_Form();
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


    Swal.fire({
      title: 'Confirmation',
      text: 'Do you really want to Update this record?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
      $.ajax(request).done(function(response){
        if(response.message)
        {
          Swal.fire({
            title: 'Error',
            text: response.message,
            icon: 'error',
            confirmButtonText: 'OK'
            })
        }
        else{
        Swal.fire({
        title: 'Success',
        text: "Data Updated Successfully!",
        icon: 'success',
        confirmButtonText: 'OK'
        })
      }
    })
  }
  });
});

$('#post-Facebook').submit(function(e) {
  e.preventDefault();
  let postdata=$('#postInput')[0].value;
    var postFacebook = {
    "url" : `http://localhost:70/post-form-route`,
    "method" : "POST",
    "data": { "postdata": postdata }
  
  }
  $.ajax(postFacebook).done(function(response){
    if(response.message == 'Problem')
    {
      Swal.fire({
        title: 'Error',
        text: "Problem with post!",
        icon: 'error',
        confirmButtonText: 'OK'
        })
    }
    else{
    Swal.fire({
    title: 'Success',
    text: "Your post has been shared!",
    icon: 'success',
    confirmButtonText: 'OK'
    })
  }
  })
})
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
    if ($('#PostFacebook_Container')[0].classList.contains('form-container-add')) {
      $('#PostFacebook_Container')[0].classList.add('form-container-hidden');
      $('#PostFacebook_Container')[0].classList.remove('form-container-add');
    }
      $('#manageUsersForm').toggle(); // Toggle the visibility of the form
  });
});

