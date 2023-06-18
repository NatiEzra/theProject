let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 	31.771959, lng: 35.217018 },
    zoom: 8
  });
  new google.maps.Marker({
    position:{ lat: 	31.771959, lng: 35.217018 },
    map:map,
    label:Sportify,
    draggable:false,
    animation:google.maps.Animation.DROP
  })
}

initMap();
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
  