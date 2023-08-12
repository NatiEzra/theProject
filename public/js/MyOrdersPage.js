async function buildPage()
{
    var table=document.getElementById("table")
    var username=await getUserName();
    const users =await getUsers();
    const orders=await getAllOrders();
    const items= await getAllItems();
    var foundUser;
    for (let i=0; i<users.length; i++)
    {
        if (users[i].username==username.username)
        {
            foundUser=users[i];
        }
    }
    for (let i=0; i<foundUser.orderHistory.length; i++)
    {
        for (let j=0; j<orders.length; j++)
        {
            if(foundUser.orderHistory[i]==orders[j]._id)
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
                for(let k=0;k<orders[j].items.length;k++)
                {
                  quantity+=orders[j].items[k].quantity;
                }

                var orderDate = new Date(orders[j].orderDate);
                var formattedDate = orderDate.toLocaleDateString();
                

                dateTD.textContent=formattedDate;
                quantityTD.textContent=quantity+" ";
                totalTD.textContent=orders[j].totalAmount;
                
                row.appendChild(dateTD);
                row.appendChild(quantityTD);
                row.appendChild(totalTD);
                row.appendChild(showMoreTd);
                row.appendChild(deleteTD);
                table.appendChild(row);


                showMoreButton.addEventListener("click",function (){

                    $('#editModal').modal('show');
                    const modalBody = document.querySelector("#editModal .modal-body");
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
                
                for (let k = 0; k < orders[j].items.length; k++) {
                    for (let x = 0; x < items.length; x++) {
                        if (orders[j].items[k].item == items[x]._id) {
                            tableHtml += `
                                <tr class="align-self-center">
                                    <td><img src="Images/${items[x].img}" class="images"></img></td>
                                    <td>${items[x].name}</td>
                                    <td>${items[x].price}₪</td>
                                    <td>${orders[j].items[k].quantity}</td>
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
                    $('#editModal').modal('hide');

                });

                deleteButton.addEventListener("click", async function(){
                    Swal.fire({
                        title: 'Confirm Deletion',
                        text: 'Are you sure you want to delete this order from history?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#3085d6',
                        confirmButtonText: 'Yes, delete it!',
                        cancelButtonText: 'Cancel',
                      }).then(async (result) => {
                        if (result.isConfirmed) 
                        {
                            foundUser.orderHistory.splice(i, 1);
                            const updateUserReq = {
                                url: "http://localhost:70/updateCart",
                                method: "POST",
                                data: JSON.stringify(foundUser),
                                contentType: "application/json",
                              };
                      
                              await $.ajax(updateUserReq);
                              
                              Swal.fire('Deleted!', 'Your order has been deleted.', 'success').then(() => {
                                location.reload();
                              });
                          
                        } else {
                          // User clicked "Cancel," do nothing
                          Swal.fire('Cancelled', 'Your order is safe :)', 'info');
                        }
        
                      });
                });

            }
        }
    }
}


buildPage();


async function getUserName()
{
        const response = await $.ajax({
          url: "http://localhost:70/check",
          method: "GET",
        });
        return response.message;
    
}
async function getUsers()
{
    const users = await $.ajax({
        url: "http://localhost:70/Users",
        method: "GET",
      });
      return users;
}
async function getAllOrders(){

    const orders = await $.ajax({
            url: "http://localhost:70/allOrders",
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