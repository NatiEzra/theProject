
let selectedImg;
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
    if (($('#GiftTheUsers')[0].classList.contains('form-container-add')) || (!($('#GiftTheUsers')[0].classList.contains('form-container-hidden')))) {
      $('#GiftTheUsers').addClass("form-container-hidden");
    }
    if (($('#allPromos_check')[0].classList.contains('form-container-add')) || (!($('#allPromos_check')[0].classList.contains('form-container-hidden')))) {
      $('#allPromos_check').addClass("form-container-hidden");
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

try{
  $('#promoTable').DataTable({
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
    if (($('#GiftTheUsers')[0].classList.contains('form-container-add')) || (!($('#GiftTheUsers')[0].classList.contains('form-container-hidden')))) {
      $('#GiftTheUsers').addClass("form-container-hidden");
    }
    if (($('#allPromos_check')[0].classList.contains('form-container-add')) || (!($('#allPromos_check')[0].classList.contains('form-container-hidden')))) {
      $('#allPromos_check').addClass("form-container-hidden");
    }
  }


  function toggle_Gift_Form() {
  
    if ($('#GiftTheUsers').hasClass("form-container-hidden")) {
      $('#GiftTheUsers').addClass("form-container-add");
      $('#GiftTheUsers').removeClass("form-container-hidden");
    }
    else{
      if ($('#GiftTheUsers').hasClass("form-container-add")) {
        $('#GiftTheUsers').removeClass("form-container-add");
        $('#GiftTheUsers').addClass("form-container-hidden");
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

    if (($('#PostFacebook_Container')[0].classList.contains('form-container-add')) || (!($('#PostFacebook_Container')[0].classList.contains('form-container-hidden')))) {
      $('#PostFacebook_Container').addClass("form-container-hidden");
    }
    if (($('#allPromos_check')[0].classList.contains('form-container-add')) || (!($('#allPromos_check')[0].classList.contains('form-container-hidden')))) {
      $('#allPromos_check').addClass("form-container-hidden");
    }
  }

  function toggle_Promocodes_Form() {
  
    if ($('#allPromos_check').hasClass("form-container-hidden")) {
      $('#allPromos_check').addClass("form-container-add");
      $('#allPromos_check').removeClass("form-container-hidden");
    }
    else{
      if ($('#allPromos').hasClass("form-container-add")) {
        $('#allPromos').removeClass("form-container-add");
        $('#allPromos').addClass("form-container-hidden");
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

    if (($('#PostFacebook_Container')[0].classList.contains('form-container-add')) || (!($('#PostFacebook_Container')[0].classList.contains('form-container-hidden')))) {
      $('#PostFacebook_Container').addClass("form-container-hidden");
    }
    if (($('#GiftTheUsers')[0].classList.contains('form-container-add')) || (!($('#GiftTheUsers')[0].classList.contains('form-container-hidden')))) {
      $('#GiftTheUsers').addClass("form-container-hidden");
    }
  }


  $("#AddItem").click(function() {
    toggleForm();
  });
  $("#PostFacebook").click(function() {
    toggle_Facebook_Form();
  });

  $("#GiftUsers").click(function() {
    toggle_Gift_Form();
  });

  $("#Promocodes").click(function() {
    toggle_Promocodes_Form();
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
    $('#postInput').val('');
  }
  })
})


$('#Add-item').submit(function(e) {
  e.preventDefault();
  let price = parseFloat($('#price').val());
  if (isNaN(price) || price <= 0) {
    Swal.fire({
      title: 'Error',
      text: "Price must be a positive number",
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }
  let postdata={
    Name:$('#name').val(),
    Type:$('#type').val(),
    Gender:$('#gender_').val(),
    Price:$('#price').val(),
    Details:$('#details').val(),
    Choose_Image:selectedImg,
  }
    var AddItem = {
    "url" : `http://localhost:70/management`,
    "method" : "POST",
    "data": { "postdata": postdata }
  
  }
  $.ajax(AddItem).done(function(response){
    if(response.message == 'There is a Problem')
    {
      Swal.fire({
        title: 'Error',
        text:response.message,
        icon: 'error',
        confirmButtonText: 'OK'
        })
    }
    else{
    Swal.fire({
    title: 'Success',
    text: response.message,
    icon: 'success',
    confirmButtonText: 'OK'
    })
  }
  $('#name').val();
  $('#details').val('');
  $('#price').val('');
// Get the span element with the class "chosen-img"
const chosenImgSpan = document.querySelector(".chosen-img");

// Check if the span element exists
  if (chosenImgSpan) {
    // Get the image element within the span
    const imgElement = chosenImgSpan.querySelector("img");
    
    // Check if the image element exists
    if (imgElement) {
      // Remove the image element
      imgElement.parentNode.removeChild(imgElement);
    } }
  })
})
if(window.location.pathname == "/management"){
  $ondelete = $(".table tbody");
  const message = 
  $ondelete.on("click", "td a.delete", function() {
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
    if ($('#GiftTheUsers')[0].classList.contains('form-container-add')) {
      $('#GiftTheUsers')[0].classList.add('form-container-hidden');
      $('#GiftTheUsers')[0].classList.remove('form-container-add');
    }
    if ($('#allPromos_check')[0].classList.contains('form-container-add')) {
      $('#allPromos_check')[0].classList.add('form-container-hidden');
      $('#allPromos_check')[0].classList.remove('form-container-add');
    }
      $('#manageUsersForm').toggle(); // Toggle the visibility of the form
  });
});

$('#chooseimage').click(function(e) {
  e.preventDefault();
  const images = document.getElementById('images-container')
  if(images.style.display==='grid')
  {
    images.style.display='none';
  }
  else{
  images.style.display ='grid'}
})

function selectImage(img){
  const images = document.getElementById('images-container')
  images.style.display ='none'
  selectedImg = img;    
  const chosen = document.querySelectorAll('.chosen-img')
  chosen[0].innerHTML = `<img src="/item-img/${selectedImg}" alt=""></img>`
}

const mySpan = document.getElementById("AddPromoCode");

// Add a click event listener
mySpan.addEventListener("click", function() {
  AddPromoCode();
});         

function AddPromoCode() {
  $('#editModal').modal('show');
  const modalTitle = document.getElementById("editModalLabel");
  const modalBody = document.querySelector("#editModal .modal-body");
  const saveChangesButton = document.getElementById("saveChangesButton");
  modalTitle.textContent = "Add New PromoCode";
  modalBody.innerHTML = `
      <label for="CodeInput_">Code:</label>
      <input type="text" id="CodeInput" class="form-control" value="">

      <label for="QuantityiInput_">Quantity:</label>
      <input type="text" id="QuantityiInput" class="form-control" value="">
            
      <label for="DiscountInput_">Discount:</label>
      <input type="text" id="DiscountInput" class="form-control" value="">
            
  `;
  saveChangesButton.addEventListener("click", async function () {
      const newCode = document.getElementById("CodeInput").value;
      const newQuantity = document.getElementById("QuantityiInput").value;
      const NewDiscount = document.getElementById("DiscountInput").value;
      
      const branch={
          promocodename: newCode,
          quantity: newQuantity,
          discount: NewDiscount,
      }

      var createBranch = {
          "url": "http://localhost:70/createPromoCode",
          "method": "POST",
          "data": JSON.stringify(branch),
      "contentType": "application/json",
        };
        const response = await $.ajax(createBranch);
      if (response.message === 'Code created successfully.') {
       const x= await Swal.fire({
          title: 'Success',
          text: "Code created successfully",
          icon: 'success',
          confirmButtonText: 'OK'
        });

        location.reload(); 
      }
      else{
          console.error("Failed to Create promocode:", error);
      }
          $('#editModal').modal('hide');
          
  });
}


 // Add this script at the end of your EJS file
//  const socket = io(); // Connect to the server using Socket.io

//  // Handle the promo code form submission
//  const promoCodeForm = document.getElementById("PromoCodeAllUsers");
//  const promoCodeButton = document.getElementById("postPromoCode");
//  promoCodeButton.addEventListener("click", () => {
//    const promoCodeInput = document.getElementById("GiftInput").value;

//    // Emit a Socket.io event to the server
//    socket.emit("createPromoCode", { promoCode: promoCodeInput });
//  });

//  // Listen for responses from the server
//  socket.on("promoCodeCreated", (response) => {
//    // Handle the response here (e.g., show a success message)
//    console.log("Promo code created:", response);
//  });
