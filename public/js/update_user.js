
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function isGenderSelected() {
    const genderInputs = document.getElementsByName('gender');
    for (const input of genderInputs) {
      if (input.checked) {
        return true;
      }
    }
    return false;
  }
  
  async function isUsernameUnique(username) {
    try {
      const response = await fetch(`/api/users/check-username?username=${encodeURIComponent(username)}`);
      const data = await response.json();
      return data.isUnique;
    } catch (error) {
      console.error('Error checking username uniqueness:', error);
      return false;
    }
  }
  
  document.getElementById('update_user').addEventListener('submit', async function (event) {
    const usernameInput = document.querySelector('input[name="username"]');
    const emailInput = document.querySelector('input[name="email"]');
    const genderSelected = isGenderSelected();
  
    // const isUniqueUsername = await isUsernameUnique(usernameInput.value);
    // if (!isUniqueUsername) {
    //   event.preventDefault(); 
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Username Already Exists',
    //     text: 'This username is already taken. Please choose a different one.',
    //   });
    // }
    if (!isValidEmail(emailInput.value)) {
      event.preventDefault();
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
    } else if (!genderSelected) {
      event.preventDefault(); 
      Swal.fire({
        icon: 'error',
        title: 'Gender Not Selected',
        text: 'Please select a gender.',
      });
    }
  });
  