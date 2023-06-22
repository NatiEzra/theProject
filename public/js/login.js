
//import sdd from "../controllers/mainpage.js";
//const { getmap } = require('./services/mainpage');


function redirectTo(url) {
  if (url !== "http://localhost:70/login") {
    event.preventDefault();
    return;
  }
  window.location.href = url;
}

function openSocialLogin(url) {
  if (url === "https://www.facebook.com/" || url === "https://www.google.com") {
    window.open(url, "_blank");
  }
}
{// A function that checks if the username and password are empty.
  document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('login-form');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
  
    loginForm.addEventListener('submit', function (event) {
      var isUsernameEmpty = usernameInput.value.trim() === '';
      var isPasswordEmpty = passwordInput.value.trim() === '';
  
      if (isUsernameEmpty || isPasswordEmpty) {
        event.preventDefault();
  
        if (isUsernameEmpty) {
          usernameInput.style.borderColor = 'red';
          usernameInput.placeholder = 'You did not enter a username.';
        } else {
          resetInputStyle(usernameInput);
        }
  
        if (isPasswordEmpty) {
          passwordInput.style.borderColor = 'red';
          passwordInput.placeholder = 'You did not enter a password.';
        } else {
          resetInputStyle(passwordInput);
        }
      }
    });
  
    usernameInput.addEventListener('input', function () {
      resetInputStyle(usernameInput);
    });
  
    passwordInput.addEventListener('input', function () {
      resetInputStyle(passwordInput);
    });
  
    function resetInputStyle(input) {
      input.style.borderColor = '';
      if (input === usernameInput) {
        input.placeholder = 'Type your Username';
      } else if (input === passwordInput) {
        input.placeholder = 'Type your password';
      }
    }
  });
  
}
