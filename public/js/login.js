function redirectTo(url) {
    if (url !== 'http://localhost:70/login') {
      event.preventDefault();
      return;
    }
    window.location.href = url;
  }
  function openSocialLogin(url) {
    if (url === 'https://www.facebook.com/' || url === 'https://www.google.com') {
      window.open(url, '_blank');
    }
  }
  