async function buildPage()
{
    table=document.getElementById("table");
    const y=await fetch('/ourStores').
    then(response=>response.json())
.then(data2=>{
data2.forEach(branch => {
    row =document.createElement("tr");
    
    nameTd=document.createElement("td");
    latTd=document.createElement("td");
    lngTd=document.createElement("td");
    editTd=document.createElement("td");
    deleteTd=document.createElement("td");

    branchName=document.createElement("h3");


    var editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-primary", "edit-button");
  var pencilIcon = document.createElement("i");
  pencilIcon.classList.add("bi", "bi-pencil-fill");
  editButton.appendChild(pencilIcon);
  editButton.appendChild(document.createTextNode(" Edit"));

    var deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger", "delete-button");
  var trashIcon = document.createElement("i");
  trashIcon.classList.add("bi", "bi-trash-fill");
  deleteButton.appendChild(trashIcon);
  deleteButton.appendChild(document.createTextNode(" Delete"));


    branchName.textContent=branch.Address;
    latTd.textContent=branch.lat;
    lngTd.textContent=branch.lng;

    nameTd.appendChild(branchName);
    editTd.appendChild(editButton);
    deleteTd.appendChild(deleteButton);

    row.appendChild(nameTd);
    row.appendChild(latTd);
    row.appendChild(lngTd);
    row.appendChild(editTd);
    row.appendChild(deleteTd);

    table.appendChild(row);

    


    deleteButton.addEventListener("click", async function () {
        
        
        await Swal.fire({
            title: 'Confirm Deletion',
            text: 'Are you sure you want to delete this branch?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then( (result) => {
            if (result.isConfirmed) {
                var deleteBranchReq = {
                    "url": "http://localhost:70/deleteBranch",
                    "method": "POST",
                    "data": JSON.stringify(branch),
                    "contentType": "application/json",
                  };
              $.ajax(deleteBranchReq).done(function(response) {

                });
            Swal.fire('Deleted!', 'Your item has been deleted.', 'success').then(() => {
                location.reload();
              });  
        }
        else{
            Swal.fire('Cancelled', 'Your branch is safe :)', 'info');
        }
    })
})
editButton.addEventListener("click", function () {
    $('#editModal').modal('show');
    const modalTitle = document.getElementById("editModalLabel");
    const modalBody = document.querySelector("#editModal .modal-body");
    const saveChangesButton = document.getElementById("saveChangesButton");
    modalTitle.textContent = "Edit Branch: " + branch.Address;
    modalBody.innerHTML = `
        <label for="addressInput">Address:</label>
        <input type="text" id="addressInput" class="form-control" maxlength="20" value="${branch.Address}">

        <label for="latInput">Latitude:</label>
        <input type="text" id="latInput" class="form-control" maxlength="20" value="${branch.lat}">
        
        <label for="lngInput">Longitude:</label>
        <input type="text" id="lngInput" class="form-control" maxlength="20" value="${branch.lng}">
        
    `;
    saveChangesButton.addEventListener("click", async function () {
        const newLat = document.getElementById("latInput").value;
        const newLng = document.getElementById("lngInput").value;
        const newAddress = document.getElementById("addressInput").value;
        var letters = /^[\u00C0-\u02AFa-zA-Zа-яА-Я\s]+$/u; //allowing the name to have letters in all langueges (p{L}=Uncode)
        if (isNaN(newLat)||isNaN(newLng)||newAddress==""||newLat==""||newLng=="" || !newAddress.match(letters)){
            const y= await Swal.fire({
                title: 'Error',
                text: "Invalid details",
                icon: 'error',
                confirmButtonText: 'OK'
              });
              return;
    
        }
        branch.Address=newAddress;
        branch.lat=newLat;
        branch.lng=newLng;

        var updateBranch = {
            "url": "http://localhost:70/updateBranch",
            "method": "POST",
            "data": { "branch": branch },

          };

         await $.ajax(updateBranch).done(function(response) {
            Swal.fire({
              title: 'Success',
              text: "Branch updated  successfully",
              icon: 'success',
              confirmButtonText: 'OK'
              }).then(() => {
                location.reload(); // Refresh the page
              });
          }).fail(function(error) {
              console.error("Failed to update branch:", error);
            });
          
            
        // Close the modal
        $('#editModal').modal('hide');
    });
});
})
})
}


buildPage();

function addStore() {
    $('#editModal').modal('show');
    const modalTitle = document.getElementById("editModalLabel");
    const modalBody = document.querySelector("#editModal .modal-body");
    const saveChangesButton = document.getElementById("saveChangesButton");
    modalTitle.textContent = "Add New Store";
    modalBody.innerHTML = `
        <label for="addressInput">Address:</label>
        <input type="text" id="addressInput" class="form-control" value="" maxlength="25">

        <label for="latInput">Latitude:</label>
        <input type="text" id="latInput" class="form-control" value="" maxlength="20">
              
        <label for="lngInput">Longitude:</label>
        <input type="text" id="lngInput" class="form-control" value="" maxlength="20">
              
    `;
    saveChangesButton.addEventListener("click", async function () {
        const newLat = document.getElementById("latInput").value;
        const newLng = document.getElementById("lngInput").value;
        const newAddress = document.getElementById("addressInput").value;
        var letters = /^[\u00C0-\u02AFa-zA-Zа-яА-Я\s]+$/u; //allowing the name to have letters in all langueges (p{L}=Uncode)
        if (isNaN(newLat)||isNaN(newLng)||newAddress==""||newLat==""||newLng=="" || !newAddress.match(letters)){
            const y= await Swal.fire({
                title: 'Error',
                text: "Invalid details",
                icon: 'error',
                confirmButtonText: 'OK'
              });
              return;
    
        }
        const branch={
            Address: newAddress,
            lat: newLat,
            lng: newLng,
        }

        var createBranch = {
            "url": "http://localhost:70/createBranch",
            "method": "POST",
            "data": JSON.stringify(branch),
        "contentType": "application/json",
          };
          

          const response = await $.ajax(createBranch);
        if (response.message === 'Branch created successfully.') {
         const x= await Swal.fire({
            title: 'Success',
            text: "Branch created successfully",
            icon: 'success',
            confirmButtonText: 'OK'
          });

          location.reload(); 
        }
        else{
            console.error("Failed to update branch:", error);
        }

          /*await $.ajax(createBranch)
          .done(function(response) {
            
               Swal.fire({
                  title: 'Success',
                  text: "Branch created successfully",
                  icon: 'success',
                  confirmButtonText: 'OK'
                }).then(() => {
                    location.reload(); 
                });
            }).fail(function(error) {
                console.error("Failed to update branch:", error);
            });*/
            $('#editModal').modal('hide');
            
    });
  }
  

