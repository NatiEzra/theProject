const fs = require('fs');
function Mainpage(req, res) {
  fs.readFile("./views/MainPage.ejs", 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const header = `
      <div class="header">
        <div class="logo">
          <a href="./main page.html">  <!--attribute to the main page URL -->
            <img src="./img/logo_transparent2.png" alt="Sportify Logo">
          </a>
        </div>
        <div class="search-bar">
          <input type="text" placeholder="Search items">
          <button class="register-button">
            <a href="#register">
              <img src="./img/user2.png" alt="Register Icon">
            </a>
          </button>
          <button class="like-button">
            <a href="#liked-items">
              <img src="./img/heart.png" alt="Register Icon">
            </a>
          </button>
          <button class="bag-button">
            <a href="#bag">
              <img src="./img/bag.png" alt="Register Icon">
            </a>
          </button>
        </div>
      </div>`;
      
      const dropdown = `
      <div class="dropdown">
        <a href="#Men">Men</a>
        <div class="dropdown-content">
          <div class="sub-dropdown">
            <a href="#shirts">Shirts</a>
            <ul>
              <li><a href="#tank-tops">Tank Tops</a></li>
              <li><a href="#t-shirts">T-Shirts</a></li>
            </ul>
          </div>
          <div class="sub-dropdown">
            <a href="#pants">Pants</a>
            <ul>
              <li><a href="#tank-tops">Jeans</a></li>
              <li><a href="#t-shirts">Shorts</a></li>
            </ul>
          </div>
          <div class="sub-dropdown">
            <a href="#shoes">Shoes</a>
            <ul>
              <li><a href="#tank-tops">Sneakers</a></li>
              <li><a href="#t-shirts">Slippers</a></li>
            </ul>
          </div>
        </div>
      </div>`;
      
      const footer = `
      <div class="footer">
        <h3>Follow us</h3>
        <button class="instagram-button">
          <a href="#instagram">
            <img src="./img/instagram.png" alt="instagram Icon">
          </a>
        </button>
        <button class="facebook-button">
          <a href="#facebook">
            <img src="./img/facebook.png" alt="facebook Icon">
          </a>
        </button>
        <h3>About</h3>
        <button class="location-button">
          <a href="#location">
            <img src="./img/pin.png" alt="location Icon">
          </a>
        </button>
        <h3>Management</h3>
        <button class="management-button">
          <a href="#management">
            <img src="./img/secure.png" alt="management Icon">
          </a>
        </button>
      </div>`;
      
      const modifiedHTML = data
        .replace('<div class="header">', header)
        .replace('<div class="dropdown">', dropdown)
        .replace('<div class="footer">', footer);
    console.log(modifiedHTML);
      res.send(modifiedHTML);
    }
  });
}
function Cartpage(req, res) { res.render("ShoppingCart", {}) }

module.exports = {
Mainpage,
Cartpage
  }