//let cart=require("../../controllers/cart");
function checkLoggedIn() {
  var request = {
    "url" : `http://localhost:70/check/`,
    "method" : "GET",
}
  $.ajax(request).done(function(response){
    console.log(response.message);
    if(response==null)
    {
      console.log('N');
    }
    console.log(response);
})
}

// Call the function to check if the user is logged in
checkLoggedIn();
async function setMenItems() {
    const x=await fetch('/MenJson').
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
                const a2=document.createElement('a');
                const Like=document.createElement("img");
                const shoppingCart=document.createElement("img");
                const price=document.createElement('p');
                shoppingCart.src="../Images/bag.png";
                Like.src="../Images/heart.png";
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
                Like.classList.add('bag-button-img');
                shoppingCart.alt="Add to cart";
              //  aLink.onclick=cart.addToCart;
                
                newDiv.appendChild(card);
                card.appendChild(image);
                card.appendChild(body);
                body.appendChild(title);
                body.appendChild(desc);
                aLink.appendChild(shoppingCart);
               a2.appendChild(Like);
                body.appendChild(aLink);
                body.appendChild(a2);
                body.appendChild(price);
               
              
            });
          });}
          setMenItems();