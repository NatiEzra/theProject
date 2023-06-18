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