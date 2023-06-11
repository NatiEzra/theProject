document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Ваш код для обработки логина и пароля здесь
    console.log("Username: " + username);
    console.log("Password: " + password);
  });
  