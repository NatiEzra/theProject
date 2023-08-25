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
      setItems();

let filteredItems;
    //////// low-high & high-low  & filters//////
    document.addEventListener('DOMContentLoaded', () => {

      // Getting references to various elements on the page
      const applyFilterButton = document.getElementById('apply-filter-btn');
      const clearFilterButton = document.getElementById('clear-filter-btn');
      const sortOptions = document.querySelectorAll('#sort-options .dropdown-item');
      const container = document.getElementById('container');
      let items = []; // Initialize items array to store fetched items
  

      // This function fetches JSON data for items and displays them
    async function fetchAndDisplayItems() {
        try {
            const response = await fetch('/AllItemsJson'); // Fetching JSON data from a URL
            items = await response.json();  // Parsing the JSON response
            displayItems(items);  // Display the fetched items
        } catch (error) {
            console.error('Error fetching or processing JSON data:', error);
        }
    }


    // This function displays items in the provided container
    function displayItems(displayedItems) {
        container.innerHTML = ''; // Clear the container


         // Loop through each item and create elements to display them
        displayedItems.forEach(item => {
            const image = document.createElement("img");
            const card = document.createElement("div");
            const body = document.createElement('div');
            const title = document.createElement("h5");
            const desc = document.createElement('p');
            const aLink = document.createElement('a');
            const cartImage = document.createElement("img");
            const price = document.createElement('p');

            cartImage.src = "../Images/bag.png";
            image.src = "../Images/" + item.img;
            title.textContent = item.name;
            desc.textContent = item.details;
            price.textContent = item.price + '₪';

            image.classList.add('card-img-top');
            card.classList.add('card');
            body.classList.add('card-body');
            title.classList.add('card-title');
            desc.classList.add('card-text');
            aLink.classList.add('shop-button');
            cartImage.classList.add('bag-button-img');
            price.classList.add('price');

            cartImage.alt = "Add to cart";

            container.appendChild(card);
            card.appendChild(image);
            card.appendChild(body);
            body.appendChild(title);
            body.appendChild(desc);
            aLink.appendChild(cartImage);
            body.appendChild(aLink);
            body.appendChild(price);

            aLink.onclick = function () {
                addToCart(item);
            };
        });
    }

    // Fetch and display items when the page loads
    fetchAndDisplayItems();

     // Apply filtering when the "Apply" button is clicked
     applyFilterButton.addEventListener('click', () => {
      // Get selected filter values
      const selectedPrice = parseFloat(document.getElementById('price').value);
      const selectedSize = document.getElementById('gender').value;
      const selectedType = document.getElementById('type').value;


      // Filter items based on selected criterion
       filteredItems = items.filter(item => {
          const priceCondition = selectedPrice ? parseFloat(item.price) < selectedPrice : true;
          const sizeCondition = selectedSize ? item.gender === selectedSize : true;
          const typeCondition = selectedType ? item.type === selectedType : true;

          return priceCondition && sizeCondition && typeCondition;
      });


      // Display filtered items
      displayItems(filteredItems);

          // Attach click event listeners to sort options
      sortOptions.forEach(option => {
        option.addEventListener('click', () => {
            const sortOrder = option.getAttribute('data-sort');
            sortItems(sortOrder, filteredItems);
        });
    });
  });

    // Clear filters and display all items when the "Clear Filters" button is clicked
    clearFilterButton.addEventListener('click', () => {
      document.getElementById('price').value = '';
      document.getElementById('gender').value = '';
      document.getElementById('type').value = ''; 
      filteredItems=[];
      applyFilterButton.disabled = true;
      fetchAndDisplayItems();       // Fetch and display all items
  });


    // Apply sorting when a sort option is selected
    sortOptions.forEach(option => {
        option.addEventListener('click', () => {
            const sortOrder = option.getAttribute('data-sort');
            sortItems(sortOrder, []);   // Sort all items (no filtering)
        });
    });

    // Function to sort items based on selected sort order
    function sortItems(sortOrder, filteredItems) {
        let sortedItems = [...items]; // Create a copy of the original items array
        if (filteredItems.length!=0){
          sortedItems = [...filteredItems];
        }
        
        // Sort items based on the selected sort order
        if (sortOrder === 'low-high') {
            sortedItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortOrder === 'high-low') {
            sortedItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }
        
        // Display sorted items
        displayItems(sortedItems);
    }

     // Enable "Apply" button when any filter option is selected
     ['price', 'gender', 'type'].forEach(selectId => {
      document.getElementById(selectId).addEventListener('change', () => {
          applyFilterButton.disabled = false;
      });
  });

  // Initially disable "Apply" button
  applyFilterButton.disabled = true;

  // Search functionality
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  // When the search button is clicked
  searchButton.addEventListener('click', () => {
      const query = searchInput.value.toLowerCase();

      // Filter items based on search query
       filteredItems = items.filter(item =>
          item.name.toLowerCase().includes(query) || item.details.toLowerCase().includes(query)
      );
      displayItems(filteredItems);   // Display search results
  });


  // When the search input changes
  searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();

      // Filter items based on search query
       filteredItems = items.filter(item =>
          item.name.toLowerCase().includes(query) || item.details.toLowerCase().includes(query)
      );
      displayItems(filteredItems);  // Display search results
  });
});


