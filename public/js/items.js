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



async function setItems() {
const x=await fetch('/AllItemsJson').
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
            price.classList.add('price');
            shoppingCart.alt="Add to cart";
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
           
            aLink.onclick=function(){
              addToCart(item);
            }
        });
      });}
      setItems();

      document.addEventListener('DOMContentLoaded', () => {
        const applyFilterButton = document.getElementById('apply-filter-btn');
        const clearFilterButton = document.getElementById('clear-filter-btn');
        const filterForm = document.getElementById('filter-form');
    
        const priceSelect = document.getElementById('price');
        const sizeSelect = document.getElementById('size');
        const colorSelect = document.getElementById('color');
    
        let items = []; // Initialize items array
    
        // Fetch JSON data from the endpoint
        fetch('/allItemsJson')
            .then(response => response.json())
            .then(data2 => {
                items = data2.map(item => ({
                    name: item.name,
                    price: parseFloat(item.price),
                    size: item.size.split(',')[0],
                    color: item.color,
                }));
    
                // Initial display of all items
                displayFilteredItems(items);
            })
            .catch(error => {
                console.error('Error fetching JSON data:', error);
            });
    
        // Enable "Apply" button when a filter option is selected
        [priceSelect, sizeSelect, colorSelect].forEach(select => {
            select.addEventListener('change', () => {
                applyFilterButton.disabled = false;
            });
        });
    
        applyFilterButton.addEventListener('click', () => {
            const selectedPrice = priceSelect.value !== '' ? parseFloat(priceSelect.value) : null;
            const selectedSize = sizeSelect.value;
            const selectedColor = colorSelect.value;
    
            const filteredItems = items.filter(item => {
                // Filter based on selected price range
                if (selectedPrice !== null && item.price > selectedPrice) {
                    return false;
                }
    
                // Filter based on selected size
                if (selectedSize !== '' && item.size !== selectedSize) {
                    return false;
                }
    
                // Filter based on selected color
                if (selectedColor !== '' && item.color !== selectedColor) {
                    return false;
                }
    
                return true;
            });
    
            displayFilteredItems(filteredItems);
        });
    
        clearFilterButton.addEventListener('click', () => {
            priceSelect.value = '';
            sizeSelect.value = '';
            colorSelect.value = '';
            applyFilterButton.disabled = true;
    
            // Clear the displayed items and reset to default view
            displayFilteredItems(items);
        });
    
        function displayFilteredItems(filteredItems) {
            const container = document.getElementById('container');
            container.innerHTML = ''; // Clear the container
    
            filteredItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.textContent = `${item.name} - Price: ${item.price} Size: ${item.size} Color: ${item.color}`;
                container.appendChild(itemElement);
            });
        }
    
        applyFilterButton.disabled = true;
    });
    