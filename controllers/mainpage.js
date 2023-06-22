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
        <a href="./Mainpage.html">
          <img
            src="../Images/logo_transparent2.png"
            alt="Sportify Logo"
          />
        </a>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Search items" />
        <button class="register-button">
          <a href="#register">
            <img src="../Images/user2.png" alt="Register Icon" />
            <div class="menu">
              <ul>
                <li>
                  <a class="login-join" ;href="http://localhost:70/login">Login</a><span>+ </span
                  ><a class="login-join" ;href="">Join</a>
                </li>
                   
        <button class="like-button">
          <a href="#liked-items">
            <img src="../Images/heart.png" alt="Register Icon" />
          </a>
        </button>
        <button class="bag-button">
          <a href="#bag">
            <img src="../Images/bag.png" alt="Register Icon" />
          </a>
        </button>
      </div>
    </div>`;
      
      const dropdown = `
      <div class="navigation">
    <div class="dropdown">
      <a class="active" href="#New">New & Features</a>
      <div class="dropdown-content">
        <a href="#Men">Men</a>
        <a href="#Women">Women</a>
      </div>
    </div>
    
    <div class="dropdown">
      <a href="#Men">Men</a>
      <div class="dropdown-content">
      <a href="#shirts">Shirts</a>
      <a href="#pants">Pants</a>
      <a href="#shoes">Shoes</a>
      </div>
    </div>

    <div class="dropdown">
      <a href="#Women">Women</a>
      <div class="dropdown-content">
      <a href="#shirts">Shirts</a>
      <a href="#pants">Pants</a>
      <a href="#shoes">Shoes</a>
      </div>
    </div>

  <div class="dropdown">
    <a href="#Sale">Sale</a>
    <div class="dropdown-content">
      <a href="#Men">Men</a>
      <a href="#Women">Women</a>
      </div>
  </div>
  </div>` ;
      
      const footer = `
      <div class="footer">
        <h3>Follow us</h3>
        <button class="instagram-button">
          <a href="#instagram">
            <img src="./images/instagram.png" alt="instagram Icon">
          </a>
        </button>
        <button class="facebook-button">
          <a href="#facebook">
            <img src="./images/facebook.png" alt="facebook Icon">
          </a>
        </button>
        <h3>About</h3>
        <button class="location-button">
          <a href="#location">
            <img src="./images/pin.png" alt="location Icon">
          </a>
        </button>
        <h3>Management</h3>
        <button class="management-button">
          <a href="#management">
            <img src="./images/secure.png" alt="management Icon">
          </a>
        </button>
      </div>`;
      
      const modifiedHTML = data
        .replace('<div class="header">', header)
        .replace('<div class="navigation">', dropdown)
        .replace('<div class="footer">', footer);
    console.log(modifiedHTML);
      res.send(modifiedHTML);
    }
  });
}
function Cartpage(req, res) { res.render("ShoppingCart", {}) }

function Salepage(req,res){
  res.render("Salepage", {})
}
module.exports = {
Mainpage,
Cartpage,
Salepage
  }

  