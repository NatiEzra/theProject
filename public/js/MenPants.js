function addToCart(item) {
  var request = {
    "url" : `http://localhost:70/check`,
    "method" : "GET",
}
  $.ajax(request).done(function(response){
    
    if(response.message=="NULL")
    {
      Swal.fire({
        title: 'Error',
        text: "Please log-in!",
        icon: 'error',
        confirmButtonText: 'OK'
        })
    }
   else{
     let username=response.message.username;
    var UserReq={
      "url": `http://localhost:70/Users`,
      "method": "GET",
    }
    $.ajax(UserReq).done(function(reponse){
      let Users=reponse;
      let foundUser=null;
      Users.forEach(function (user){
          if (user.username==username)
          {
            foundUser=user;
            return;
          }
      });
      let itemExists=false;
      for (let i=0; i<foundUser.cart.length;i++)
      {
        if (foundUser.cart[i].itemId==item._id)
        {
          itemExists=true;
          foundUser.cart[i].quantity++;
        }
      }
      if(!itemExists)
      {
        foundUser.cart.push({ itemId: item._id, quantity: 1 });
      }
      
      var updateUserReq = {
        "url": "http://localhost:70/updateCart",
        "method": "POST",
        "data": JSON.stringify(foundUser), // Convert the user object to JSON
        "contentType": "application/json",
      };
      $.ajax(updateUserReq).done(function(response) {
        Swal.fire({
          title: 'Success',
          text: "Item added to cart successfully",
          icon: 'success',
          confirmButtonText: 'OK'
          })
        console.log("Cart updated and saved to the database.");
      }).fail(function(error) {
        console.error("Failed to update cart:", error);
      });

    })
    
    
   }
})
}

async function setMenPants() {
    const x=await fetch('/MenPantsJson').
          then(response=>response.json())
          .then(data=>{
            const newDiv = document.getElementById('container');
            data.forEach(item=>{
                const image=document.createElement("img");
                const card=document.createElement("div");
                const body=document.createElement('div');
                const title=document.createElement("h5");
                const desc=document.createElement('p');
                const aLink=document.createElement('a');
                const shoppingCart=document.createElement("img");
                const price=document.createElement('p');
                shoppingCart.src="../Images/bag.png";
                image.src="../Images/";
                image.src+=item.img;
                title.textContent = item.name;
                desc.textContent=item.details;
                price.textContent=item.price+'₪';
                image.classList.add('card-img-top');
                card.classList.add('card');
                body.classList.add('card-body');
                title.classList.add('card-title');
                desc.classList.add('card-text');
                aLink.classList.add('shop-button');
                shoppingCart.classList.add('bag-button-img');               
                price.classList.add('price');
                shoppingCart.alt="Add to cart";
                newDiv.appendChild(card);
                card.appendChild(image);
                card.appendChild(body);
                body.appendChild(title);
                body.appendChild(desc);
                aLink.appendChild(shoppingCart);
                body.appendChild(aLink);
                body.appendChild(price);
                aLink.onclick=function(){
                  addToCart(item);
                }
              
            });
          });}
          setMenPants();