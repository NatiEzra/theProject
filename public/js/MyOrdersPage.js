async function buildPage()
{
    var table=document.getElementById("table")
    var username=await getUserName();
    const users =await getUsers();
    const orders=await getAllOrders();
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
                var deleteTD=document.createElement("td");
                var addTD=document.createElement("td");


                var quantity=0;
                for(let k=0;k<orders[j].items.length;k++)
                {
                  quantity+=orders[j].items[k].quantity;
                }

                dateTD.textContent=orders[j].orderDate;
                quantityTD.textContent=quantity+" ";
                totalTD.textContent=orders[j].totalAmount;
                
                row.appendChild(dateTD);
                row.appendChild(quantityTD);
                row.appendChild(totalTD);
                table.appendChild(row);
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