async function setCart(){
var itemIDs=[];
var existingItems=[];
var sumprice=0;
const y=await fetch('/allItemsJson').
                then(response=>response.json())
          .then(data2=>{
            data2.forEach(item => {
            existingItems.push(item);
            })
          })
const x=await fetch('/cart').
          then(response=>response.json())
          .then(data=>{
            var availableCount=0;

              const table=document.getElementById("table");
              
            data.forEach(item => {
                //create elements
                let count=0;
                var flag=false;
               
                for (let i=0; i<data.length;i++)
                {
                  
                    if (data[i]._id==item._id)
                    {
                        count++;
                    }
                }
                for(let i=0; i<itemIDs.length;i++)
                {
                    if (itemIDs[i]==item._id)
                    {
                        flag=true;
                        break;
                    }
                }
                var ItemExists=false;
                for (let i=0; i<existingItems.length;i++)
                {
                    if (existingItems[i]._id==item._id)
                    {
                        ItemExists=true;
                        break;
                    }
                }
                if(!flag && ItemExists){
                itemIDs.push(item._id);
                const row=document.createElement("tr");
                const imageDiv=document.createElement("td");
                const image=document.createElement("img");
                const descriptionDiv=document.createElement("td");
                const itemName=document.createElement("h5");
                const priceDiv=document.createElement("td");
                const price=document.createElement("p");
                const quantityDiv=document.createElement("td");
                const quantity=document.createElement("input");
                const totalDiv=document.createElement("td");
                const total=document.createElement("p");
                const size=document.createElement("select");
                const sizeDiv=document.createElement("td");
                const erase = document.createElement("a");
                
                erase.className = "shop-tooltip close float-none text-danger";
                erase.title = "Remove";
                erase.innerText = "×";
                erase.classList.add("shop-tooltip");
                //erase.href="./cartpage"
                const eraseDiv=document.createElement("td");
                if (item.type!="shoes"){
                    const blank=document.createElement("option");
                    const XS=document.createElement("option");
                    const S=document.createElement("option");
                    const M=document.createElement("option");
                    const L=document.createElement("option");
                    const XL=document.createElement("option");
                    const XXL=document.createElement("option");
                    blank.value="";
                    blank.textContent="Size";
                    XS.value="XS";
                    XS.textContent="XS";
                    S.value="S";
                    S.textContent="S";
                    M.value="M";
                    M.textContent="M";
                    L.value="L";
                    L.textContent="L";
                    XL.value="XL";
                    XL.textContent="XL";
                    XXL.value="XXL";
                    XXL.textContent="XXL";
                    size.appendChild(blank);
                    size.appendChild(XS);
                    size.appendChild(S);
                    size.appendChild(M);
                    size.appendChild(L);
                    size.appendChild(XL);
                    size.appendChild(XXL);
                    
                }
                else{
                    const blank=document.createElement("option");
                    const s38=document.createElement("option");
                    const s39=document.createElement("option");
                    const s40=document.createElement("option");
                    const s41=document.createElement("option");
                    const s42=document.createElement("option");
                    const s43=document.createElement("option");
                    const s44=document.createElement("option");
                    const s45=document.createElement("option");

                    blank.value="";
                    blank.textContent="Size";
                    s38.value="38";
                    s38.textContent="38";
                    s39.value="39";
                    s39.textContent="39";
                    s40.value="40";
                    s40.textContent="40";
                    s41.value="41";
                    s41.textContent="41";
                    s42.value="42";
                    s42.textContent="42";
                    s43.value="43";
                    s43.textContent="43";
                    s44.value="44";
                    s44.textContent="44";
                    s45.value="45";
                    s45.textContent="45";
                    

                    size.appendChild(blank);
                    size.appendChild(s38);
                    size.appendChild(s39);
                    size.appendChild(s40);
                    size.appendChild(s41);
                    size.appendChild(s42);
                    size.appendChild(s43);
                    size.appendChild(s44);
                    size.appendChild(s45);

                }
                
                
                //inserting the data
                image.src=item.img;
                itemName.textContent=item.name;
                price.textContent=item.price;
                price.textContent+="₪";
                quantity.type="number";
                quantity.min="0";
                quantity.max="100";
                quantity.value=count;
                total.textContent=quantity.value*item.price;
                sumprice += parseFloat(total.textContent.replace("₪", ""));
                total.textContent+="₪";
                erase.onclick=function(){
                    removeFromCart(item);
                  }

                  quantity.addEventListener("input", async function () {
                    // Update the total when the quantity changes
                    const updatedTotal = parseFloat(quantity.value) * parseFloat(item.price);
                    total.textContent = updatedTotal.toFixed(2) + "₪";
                    sumprice = calculateTotalPrice();
                    const total2=document.getElementById("tp");
                    total2.innerText=sumprice+"₪";
                    const removeResponse = await removeItem(item);
                      for (let i=0;i<existingItems.length;i++)
                      {
                        if (item._id==existingItems[i]._id)
                        {
                            for(let j=0; j<quantity.value;j++)
                            {
                                const addResponse = await addToCart(item);
                            }
                        }
                      }
                      
                  });
                //adding classes
                image.classList.add("images");
                //hachnasa
                imageDiv.appendChild(image);
                descriptionDiv.appendChild(itemName);
                sizeDiv.appendChild(size);
                priceDiv.appendChild(price);
                quantityDiv.appendChild(quantity);
                totalDiv.appendChild(total);
                eraseDiv.appendChild(erase);
                

                row.appendChild(imageDiv);
                row.appendChild(descriptionDiv);
                row.appendChild(sizeDiv);
                row.appendChild(priceDiv);
                row.appendChild(quantityDiv);
                row.appendChild(totalDiv);
                row.appendChild(eraseDiv);
                table.appendChild(row);

            }
            });
            if (itemIDs.length>0){
            const div=document.getElementById("empty");
                div.textContent="";
            }

          })
          const total2=document.getElementById("tp");
          total2.innerText=sumprice+"₪";
        }
          setCart();

          function removeFromCart(item)
          {
            Swal.fire({
                title: 'Confirm Deletion',
                text: 'Are you sure you want to delete this item?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel',
              }).then((result) => {
                if (result.isConfirmed) {
                    var request = {
                        "url": "http://localhost:70/removeFromCart",
                        "method": "POST",
                        "data": JSON.stringify(item), // Convert the item object to JSON
                        "contentType": "application/json",
                      };
                      $.ajax(request).done(function(response) {
                        
                      });
                      
                      Swal.fire('Deleted!', 'Your item has been deleted.', 'success').then(() => {
                        // Refresh the page after the success message is closed
                        location.reload();
                      });
                  
                } else {
                  // User clicked "Cancel," do nothing
                  Swal.fire('Cancelled', 'Your item is safe :)', 'info');
                }

              });
            
          }

          function calculateTotalPrice() {
            // Get all the rows in the table
            const rows = document.querySelectorAll("#table tr");
         
            let totalPrice = 0;
          
            // Loop through each row and calculate the total price
            for (let i = 0; i < rows.length; i++) {
                const totalCell = rows[i].querySelector("td:nth-last-child(2) p");
              if (totalCell) {
                const totalValue = parseFloat(totalCell.textContent.replace("₪", ""));
                if (!isNaN(totalValue)) {
                  totalPrice += totalValue;
                }
              }
            }
          
            return totalPrice;
          }
          async function removeItem(item)
          {
            var request = {
                "url": "http://localhost:70/removeFromCart",
                "method": "POST",
                "data": JSON.stringify(item), // Convert the item object to JSON
                "contentType": "application/json",
              };
              $.ajax(request).done(function(response) {
                
              });
          }

          async function addToCart(item)
          {
            var request2 = {
                "url" : `http://localhost:70/check`,
                "method" : "GET",
            }
              $.ajax(request2).done(function(response){
            let username2=response.message.username;
            var UserReq={
            "url": `http://localhost:70/Users`,
            "method": "GET",
            }
            $.ajax(UserReq).done(function(reponse){
            let Users=reponse;
            let foundUser=null;
            Users.forEach(function (user){
                if (user.username==username2)
                {
                    foundUser=user;
                }
            });
            foundUser.cart.push(item);
            
            var updateUserReq = {
                "url": "http://localhost:70/updateCart",
                "method": "POST",
                "data": JSON.stringify(foundUser), // Convert the user object to JSON
                "contentType": "application/json",
            };
            $.ajax(updateUserReq).done(function(response) {
                console.log("Cart updated and saved to the database.");
            }).fail(function(error) {
                console.error("Failed to update cart:", error);
            });

            })
            
        });
          }