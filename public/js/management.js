
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
      if ($('#Allitems')[0].classList.contains('form-container-add')) {
        $('#Allitems')[0].classList.add('form-container-hidden');
        $('#Allitems')[0].classList.remove('form-container-add');
      }
      formContainer.removeClass("form-container-hidden");
      formContainer.addClass("form-container-add");
    } else {
      formContainer.removeClass("form-container-add");
      formContainer.addClass("form-container-hidden");
    }
    
    if (($('#allPromos_check')[0].classList.contains('form-container-add')) || (!($('#allPromos_check')[0].classList.contains('form-container-hidden')))) {
      $('#allPromos_check').addClass("form-container-hidden");
    }
    if (($('#allOrders_check')[0].classList.contains('form-container-add')) || (!($('#allOrders_check')[0].classList.contains('form-container-hidden')))) {
      $('#allOrders_check').addClass("form-container-hidden");
  }
  if (($('#Allitems')[0].classList.contains('form-container-add')) || (!($('#Allitems')[0].classList.contains('form-container-hidden')))) {
    $('#Allitems').addClass("form-container-hidden");
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
  $('#orderTable').DataTable({
    paging: true, // Enable pagination
    pageLength: 5, // Set the number of rows per page to 5
    lengthMenu: [5, 10, 15], // Customize the page length options


  });
}catch(e)
{}
try{
  $('#allItemsTable').DataTable({
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
   
    if (($('#allPromos_check')[0].classList.contains('form-container-add')) || (!($('#allPromos_check')[0].classList.contains('form-container-hidden')))) {
      $('#allPromos_check').addClass("form-container-hidden");
    }
    if (($('#allOrders_check')[0].classList.contains('form-container-add')) || (!($('#allOrders_check')[0].classList.contains('form-container-hidden')))) {
      $('#allOrders_check').addClass("form-container-hidden");
  }
  if (($('#Allitems')[0].classList.contains('form-container-add')) || (!($('#Allitems')[0].classList.contains('form-container-hidden')))) {
    $('#Allitems').addClass("form-container-hidden");
}
  }



   /* if (($('#PostFacebook_Container')[0].classList.contains('form-container-add')) || (!($('#PostFacebook_Container')[0].classList.contains('form-container-hidden')))) {
      $('#PostFacebook_Container').addClass("form-container-hidden");
    }
    if (($('#allPromos_check')[0].classList.contains('form-container-add')) || (!($('#allPromos_check')[0].classList.contains('form-container-hidden')))) {
      $('#allPromos_check').addClass("form-container-hidden");
    }
    if (($('#allOrders_check')[0].classList.contains('form-container-add')) || (!($('#allOrders_check')[0].classList.contains('form-container-hidden')))) {
      $('#allOrders_check').addClass("form-container-hidden");
  }
  }*/

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
    if (($('#Allitems')[0].classList.contains('form-container-add')) || (!($('#Allitems')[0].classList.contains('form-container-hidden')))) {
      $('#Allitems').addClass("form-container-hidden");
  }
  if (($('#allOrders_check')[0].classList.contains('form-container-add')) || (!($('#allOrders_check')[0].classList.contains('form-container-hidden')))) {
    $('#allOrders_check').addClass("form-container-hidden");
}
   
  }

  function toggle_AllItems_Form() {
    if ($('#Allitems').hasClass("form-container-hidden")) {
      $('#Allitems').addClass("form-container-add");
      $('#Allitems').removeClass("form-container-hidden");
    } else {
      if ($('#Allitems').hasClass("form-container-add")) {
        $('#Allitems').removeClass("form-container-add");
        $('#Allitems').addClass("form-container-hidden");
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
    if (($('#allPromos_check')[0].classList.contains('form-container-add')) || (!($('#allPromos_check')[0].classList.contains('form-container-hidden')))) {
      $('#allPromos_check').addClass("form-container-hidden");
    }
    if (($('#allOrders_check')[0].classList.contains('form-container-add')) || (!($('#allOrders_check')[0].classList.contains('form-container-hidden')))) {
      $('#allOrders_check').addClass("form-container-hidden");
    }
    
  }


  function toggle_AllOrders_Form() {
    if ($('#allOrders_check').hasClass("form-container-hidden")) {
      $('#allOrders_check').addClass("form-container-add");
      $('#allOrders_check').removeClass("form-container-hidden");
    } else {
      if ($('#allOrders').hasClass("form-container-add")) {
        $('#allOrders').removeClass("form-container-add");
        $('#allOrders').addClass("form-container-hidden");
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
    if (($('#allPromos_check')[0].classList.contains('form-container-add')) || (!($('#allPromos_check')[0].classList.contains('form-container-hidden')))) {
      $('#allPromos_check').addClass("form-container-hidden");
    }
    if (($('#Allitems')[0].classList.contains('form-container-add')) || (!($('#Allitems')[0].classList.contains('form-container-hidden')))) {
      $('#Allitems').addClass("form-container-hidden");
  }
  }
  

  $("#AddItem").click(function() {
    toggleForm();
  });
  $("#PostFacebook").click(function() {
    toggle_Facebook_Form();
  });



  $("#Promocodes").click(function() {
    toggle_Promocodes_Form();
  });
  $("#AllOrders").click(function() {
    toggle_AllOrders_Form();
  });
  $("#AllItems").click(function() {
    toggle_AllItems_Form();
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
  if($('#name').val().length>40){
    Swal.fire({
      title: 'Error',
      text: "Item name cannot be longer than 40 letters",
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }
  if($('#details').val().length>40){
    Swal.fire({
      title: 'Error',
      text: "Item details cannot be longer than 40 letters",
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }
  let postdata={
    Name:$('#name').val(),
    Type:$('#type_').val(),
    Gender:$('#_gender_').val(),
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
        text:"Fill all data",
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
    }).then(() => {
      location.reload(); // Refresh the page
    });
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
  $ondelete.on("click", "td a.view", async function(e) {
    
                  e.preventDefault();
                  const orders=await getAllOrders();
                  const items= await getAllItems();
                  $('#editOrderModal').modal('show');
                  

                    // Add a click event listener to the link
                   
                      // Get the value of the data-id attribute
                      const dataId = $(this).attr("data-id");
                      let order;
                  for (let i=0; i<orders.length;i++)
                  {
                    if (orders[i]._id==dataId)
                    {
                      order=orders[i];
                      break;
                    }
                  }
                  const modalBody = document.querySelector("#editOrderModal .modal-body");
                  modalBody.innerHTML = ``; 
                  let tableHtml = `
                  <table class="table table-hover mb-0">
                      <tbody>
                          <tr class="align-self-center">
                              <th>Image</th>
                              <th>Item Name</th>
                              <th>Price</th>
                              <th>Quantity</th>
                          </tr>
              `;
              
              for (let k = 0; k < order.items.length; k++) {
                  for (let x = 0; x < items.length; x++) {
                      if (order.items[k].item == items[x]._id) {
                          tableHtml += `
                              <tr class="align-self-center">
                                  <td><img src="Images/${items[x].img}" class="images"></img></td>
                                  <td class="nowrap">${items[x].name}</td>
                                  <td>${items[x].price}₪</td>
                                  <td>${order.items[k].quantity}</td>
                              </tr>
                          `;
                      }
                  }
              }
              
              tableHtml += `
                      </tbody>
                  </table>
              `;
              
              modalBody.innerHTML += tableHtml;
                  $('#editOrderModal').modal('hide');

  });
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
  $ondelete.on("click", "td a.deletepromocode", async function(e) {
    e.preventDefault();
    var promocode_id = $(this).attr("data-id");
    var DeletePromoCode = {
      "url" : `http://localhost:70/api/promocodes/${promocode_id}`,
      "method" : "DELETE",
      "data":{"promoid":promocode_id}
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
      $.ajax(DeletePromoCode).done(function(response) {
        if(response.message=="Cant remove!"){
          Swal.fire({
            title: 'Error',
            text: response.message,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
        else{
        Swal.fire({
          title: 'Success',
          text: response.message,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          location.reload(); // Refresh the page
        });
        }
      });
    } else {
      // User clicked "Cancel" or closed the alert
      // Do nothing or perform any desired action
    }
  });
  });
}
$(document).ready(function() {


  $("#closeModalButton").click(function () {
    $("#editOrderModal").modal('hide'); // Close the modal
});
$("#closeModalButton2").click(function () {
  $("#editOrderModal").modal('hide'); // Close the modal
});
$("#closeModalButton3").click(function () {
  $("#editModal").modal('hide'); // Close the modal
});
$("#closeModalButton4").click(function () {
  $("#editModal").modal('hide'); // Close the modal
});

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
   
    if ($('#allPromos_check')[0].classList.contains('form-container-add')) {
      $('#allPromos_check')[0].classList.add('form-container-hidden');
      $('#allPromos_check')[0].classList.remove('form-container-add');
    }
    if ($('#allOrders_check')[0].classList.contains('form-container-add')) {
      $('#allOrders_check')[0].classList.add('form-container-hidden');
      $('#allOrders_check')[0].classList.remove('form-container-add');
    }
    if ($('#Allitems')[0].classList.contains('form-container-add')) {
      $('#Allitems')[0].classList.add('form-container-hidden');
      $('#Allitems')[0].classList.remove('form-container-add');
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
  const saveChangesButton = document.getElementById("savePromocodeButton");
  modalTitle.textContent = "Add New PromoCode";
  modalBody.innerHTML = `
      <label for="CodeInput_">Code:</label>
      <input type="text" id="CodeInput" name="codename" class="form-control" value="">

      <label for="QuantityiInput_">Quantity:</label>
      <input type="text" id="QuantityiInput" name="quntitycode" class="form-control" value="">
            
      <label for="DiscountInput_">Discount:</label>
      <input type="text" id="DiscountInput"  name="discountcode" class="form-control" value="">
            
  `;
  saveChangesButton.addEventListener("click", async function (e) {
    e.preventDefault();
      const newCode = document.getElementById("CodeInput").value;
      const newQuantity = document.getElementById("QuantityiInput").value;
      const NewDiscount = document.getElementById("DiscountInput").value;

      if (isNaN(NewDiscount) || isNaN(newQuantity)||newQuantity < 0|| NewDiscount<0) {
        Swal.fire({
          title: 'Error',
          text: "newQuantity/NewDiscount must be a positive number",
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return;
      }
      if (newQuantity=="" || NewDiscount=="" || newCode=="") {
        Swal.fire({
          title: 'Error',
          text: "Add data",
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return;
      }
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
        if(response=="Promocode exsist")
        {
          Swal.fire({
            title: 'Error',
            text: "Promocode already exsist",
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      else{
      if (response.message === 'Your PromoCode has been Added!') {
       Swal.fire({
          title: 'Success',
          text: "Code created successfully",
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(()=>{
          $('#editModal').modal('hide');
          location.reload();
        });
      }
      // else{
      //   Swal.fire({
      //     title: 'Error',
      //     text: "Problem to create code",
      //     icon: 'error',
      //     confirmButtonText: 'OK'
      //   });
      // }
       
    }
  });
}


async function createOrderHistory(){
  var tableBody=document.getElementById("ordersBody");
    
    const orders=await getAllOrders();
    const items= await getAllItems();
    for(let i=0; i<orders.length;i++)
    {

                var row=document.createElement("tr");
                var dateTD=document.createElement("td");
                var quantityTD=document.createElement("td");
                var totalTD=document.createElement("td");
                var showMoreTd=document.createElement("td");
                var deleteTD=document.createElement("td");



                var showMoreButton = document.createElement("button");
                showMoreButton.textContent = "Show more";
                showMoreButton.className = "custom-button"; 

                var deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.className = "delete-button"; 

                showMoreTd.appendChild(showMoreButton);
                deleteTD.appendChild(deleteButton);

                var quantity=0;
                for(let k=0;k<orders[i].items.length;k++)
                {
                  quantity+=orders[i].items[k].quantity;
                }

                var orderDate = new Date(orders[i].orderDate);
                var formattedDate = orderDate.toLocaleDateString();
                var formattedTime = orderDate.toLocaleTimeString();

                dateTD.textContent=formattedDate+' '+formattedTime;
                quantityTD.textContent=quantity;
                totalTD.textContent=orders[i].totalAmount;
                
                row.appendChild(dateTD);
                row.appendChild(quantityTD);
                row.appendChild(totalTD);
                row.appendChild(showMoreTd);
                row.appendChild(deleteTD);
                tableBody.appendChild(row);
                showMoreButton.classList.add("ui", "button", "show-more-button");
                showMoreButton.addEventListener("click",function (e){
                    e.preventDefault();
                  $('#editOrderModal').modal('show');
                  const modalBody = document.querySelector("#editOrderModal .modal-body");
                  modalBody.innerHTML = ``; 
                  let tableHtml = `
                  <table class="table table-hover mb-0">
                      <tbody>
                          <tr class="align-self-center">
                              <th>Image</th>
                              <th>Item Name</th>
                              <th>Price</th>
                              <th>Quantity</th>
                          </tr>
              `;
              
              for (let k = 0; k < orders[i].items.length; k++) {
                  for (let x = 0; x < items.length; x++) {
                      if (orders[i].items[k].item == items[x]._id) {
                          tableHtml += `
                              <tr class="align-self-center">
                                  <td><img src="Images/${items[x].img}" class="images"></img></td>
                                  <td>${items[x].name}</td>
                                  <td>${items[x].price}₪</td>
                                  <td>${orders[i].items[k].quantity}</td>
                              </tr>
                          `;
                      }
                  }
              }
              
              tableHtml += `
                      </tbody>
                  </table>
              `;
              
              modalBody.innerHTML += tableHtml;
                  $('#editOrderModal').modal('hide');

              });

              


    }
  
}

//createOrderHistory();
async function getAllOrders(){

    const orders = await $.ajax({
            url: "http://localhost:70/allOrdersJson",
            method: "GET",
        });
        return orders;
}
async function getAllItems()
{
    var existingItems=[];

const y=await fetch('/allItemsJson').
                then(response=>response.json())
          .then(data2=>{
            data2.forEach(item => {
            existingItems.push(item);
            })
          });
          return existingItems;
}





/////////////// ALL ITEMS ///////////////////
////////////////////////////////////////////

$(document).ready(function() {

  $('#saveEditButton').click(function() {
      const itemId = $('#editItemForm').data('id');
      const updatedItem = {
          name: $('#editItemName').val(),
          price: $('#editItemPrice').val()
      };

      

      updateItem(itemId, updatedItem);
      $('#editItemModal').modal('hide');
  });

  loadAllItems();
});

async function updateItem(itemId, updatedItem) {
  if($('#editItemName').val().length>40){
    Swal.fire({
      title: 'Error',
      text: "Item name cannot be longer than 40 letters",
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }
  if($('#editItemdetails').val().length>40){
    Swal.fire({
      title: 'Error',
      text: "Item details cannot be longer than 40 letters",
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }
      let ItemData={
        _id:itemId,
        name:$('#editItemName').val(),
        price:$('#editItemPrice').val(),
        type:$('#type').val(),
        details:$('#editItemdetails').val(),
        gender:$('#_gender').val(),
      }

      
      const response = await $.ajax({
          "url": `http://localhost:70/api/items/${itemId}`,
          "method": 'PUT',
          "data": { "itemId": ItemData },
      }).done(function(response){
        if(response.message=="Item updated successfully")
        {
          Swal.fire({
            title: 'Success',
            text: response.message,
            icon: 'success',
            confirmButtonText: 'OK'
            }).then(() => {
              location.reload(); // Refresh the page
            });
        }
        else{
        Swal.fire({
        title: 'Error',
        text: "Problem to Update Item",
        icon: 'error',
        confirmButtonText: 'OK'
        })
      }
    });
      //loadAllItems();

}

async function loadAllItems() {
  const allItems = await $.ajax({
      url: "http://localhost:70/allItemsJson",
      method: "GET"
  });

  const tableBody = $('#allItemsTable tbody');
  //tableBody.empty();

//   allItems.forEach(function(item) {
//     const row = `
//         <tr>
//             <td>${item.name}</td>
//             <td><img src="${item.img}" alt="Product Photo" class="product-photo small-photo"></td>
//             <td>${item.price}</td>
//             <td>
//                 <button class="btn btn-primary btn-sm edit-item" data-id="${item._id}">Edit</button>
//                 <button class="btn btn-danger btn-sm remove-item" data-id="${item._id}">Remove</button>
//             </td>
//         </tr>
//     `;
//     tableBody.append(row);
// });


$('#allItemsTable').on('click', '.edit-item', function(e) {
  e.preventDefault(); 
  const itemId = $(this).data('id');
  const editedItem = allItems.find(item => item._id === itemId);
  openEditModal(editedItem);
});

$('#allItemsTable').on('click', '.remove-item', function(e) {
  e.preventDefault(); // Предотвращаем отправку запроса на сервер
  const itemId = $(this).data('id');
  Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
  }).then(async (result) => {
      if (result.isConfirmed) {
          await removeItem(itemId);
      }
  });
});

$('.edit-item').click(function() {
    const itemId = $(this).data('id');
    const editedItem = allItems.find(item => item._id === itemId);
    openEditModal(editedItem);
});
}

function openEditModal(item) {
  const editedItem = { ...item };
  // switch (editedItem.gender) {
  //   case "male":
  //     document.querySelector("#_gender [value='male']").selected = true;
  //     break;
  //   case "female":
  //     document.querySelector("#_gender [value='female']").selected = true;
  //     break;
  //   case "other":
  //     document.querySelector("#_gender [value='other']").selected = true;
  //     break;
  // }
  // switch (editedItem.type) {
  //   case "pants":
  //     document.querySelector("#type [value='pants']").selected = true;
  //     break;
  //   case "shirts":
  //     document.querySelector("#type [value='shirts']").selected = true;
  //     break;
  //   case "shoes":
  //     document.querySelector("#type [value='shoes']").selected = true;
  //     break;
  // }
 
  Swal.fire({
      title: 'Edit Item',
      html: `
          <form id="editItemForm">
              <div class="form-group">
                  <label for="editItemName">Name:</label>
                  <input type="text" class="form-control" id="editItemName" name="name" value="${editedItem.name}" required>
              </div>
              <div class="form-group">
                  <label for="editItemPrice">Price:</label>
                  <input type="number" min="1" class="form-control" id="editItemPrice" name="price" value="${editedItem.price}" required>
              </div>
              <div class="form-group">
                  <label for="editItemPrice">Type:</label>
                  <select class="form-control" id="type" name="type" required>
                  <option value="pants" ${editedItem.type === 'pants' ? 'selected' : ''}>pants</option>
                  <option value="shirts" ${editedItem.type === 'shirts' ? 'selected' : ''}>shirts</option>
                  <option value="shoes" ${editedItem.type === 'shoes' ? 'selected' : ''}>shoes</option>
                </select>
              </div>
              <div class="form-group">
                  <label for="editItemdetails">Details:</label>
                  <input type="text" class="form-control" id="editItemdetails" name="price" value="${editedItem.details}" required>
              </div>
              <div class="form-group">
                  <label for="_gender">Gender:</label>
                  <select class="form-control" id="_gender" name="gender" required>
                    <option value="male" ${editedItem.gender === 'male' ? 'selected' : ''}>Male</option>
                    <option value="female" ${editedItem.gender === 'female' ? 'selected' : ''}>Female</option>
                    <option value="other" ${editedItem.gender === 'other' ? 'selected' : ''}>Other</option>
                </select>
              </div>
          </form>
      `,
     
      showCancelButton: true,
      confirmButtonText: 'Save Changes',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const editedName = $('#editItemName').val();
        const editedPrice = $('#editItemPrice').val();
        const editedDetails = $('#editItemdetails').val();
        const editedGender = $('#_gender').val();
        if (!editedName || !editedPrice || !editedDetails) {
            Swal.showValidationMessage('Please fill in all required fields');
            return false;
        }
    
        if (!(/^\d+$/.test(editedPrice))) {
            Swal.showValidationMessage('Price must be a numeric value');
            return false;
        }
    
        return {
            name: editedName,
            price: editedPrice,
            gender: editedGender
        };
    }
    
  }).then((result) => {
      if (result.isConfirmed) {
          updateItem(item._id, result.value);
      }
  });
}




async function removeItem(itemId) {
      const resp = await $.ajax({
          url: `http://localhost:70/api/items/${itemId}`,
          method: 'POST',
          "data": { "itemId": itemId }, // Convert the item object to JSON
          // "contentType": "application/json",
      });

      // loadAllItems();
      const response = await $.ajax(resp);
      if(resp.message == "Problem with remove the item")
      {
          Swal.fire({
            title: 'Error',
            text: resp.message,
            icon: 'error',
            confirmButtonText: 'OK'
            })
      }
      else{
        Swal.fire({
        title: 'Success',
        text: resp.message,
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        location.reload(); // Refresh the page
      });
      }
}

