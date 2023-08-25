$(document).ready(function() {

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function containsOnlyLetters(input) {
    const lettersRegex = /^[a-zA-Z]+$/;
    return lettersRegex.test(input);
  }

  function isValidName(name) {
    return name.length > 0 && name.length <= 20;
  }

  function isValidGender() {
    return $('input[name="gender"]').is(':checked');
  }

  function isValidDate(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  }

  $('#update_user').submit(function(e) {
    e.preventDefault();

    const username = $('input[name="username"]').val();
    const email = $('input[name="email"]').val();
    const firstName = $('input[name="firstname"]').val();
    const lastName = $('input[name="lastname"]').val();
    const genderValid = isValidGender();
    const date = $('input[name="date"]').val();
    const password = $('input[name="password"]').val();

    if (!isValidEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
    } else if (!isValidName(firstName) || !isValidName(lastName)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Name',
        text: 'Name and last name must be between 1 and 20 characters.',
      });
    } else if (!containsOnlyLetters(firstName) || !containsOnlyLetters(lastName)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Name',
        text: 'Name and last name must contain only letters.',
      });
    } else if (!genderValid) {
      Swal.fire({
        icon: 'error',
        title: 'Gender not selected',
        text: 'Please select a gender option.',
      });
    } else if (!isValidDate(date)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Date',
        text: 'Please enter a valid date in YYYY-MM-DD format.',
      });
    } else if (!password) {
      Swal.fire({
        icon: 'error',
        title: 'Password Required',
        text: 'Please enter a password.',
      });
    } else {    
      this.submit();
    }
  });
});
