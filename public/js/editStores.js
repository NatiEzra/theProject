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
    editButton.addEventListener("click", async function () {

        addressIn=document.createElement("input");
        latIn=document.createElement("input");
        lngIn=document.createElement("input");
        
        
        latIn.value=branch.lat;
        lngIn.value=branch.lng;
        addressIn.value=branch.Address;

        branchName.textContent="";
        latTd.textContent="";
        lngTd.textContent="";

        latTd.appendChild(latIn);
        lngTd.appendChild(lngIn);
        nameTd.appendChild(addressIn);
        

        var okButton = document.createElement("button");
        okButton.classList.add("btn", "btn-success", "ok-button");
        okButton.textContent = "OK";


        var cancelButton = document.createElement("button");
        cancelButton.classList.add("btn", "btn-secondary", "cancel-button");
        cancelButton.textContent = "Cancel";

        editButton.classList.add("hidden");
        editTd.appendChild(okButton);
        editTd.appendChild(cancelButton);
        

    })
})
})
}


buildPage();




