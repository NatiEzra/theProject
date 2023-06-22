let map;
let markers = [];
let infoWindow;
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
      center: { lat: 31.771959, lng: 35.217018 },
      zoom: 8,
    });

  const x=await fetch('/ourstore',{});
  console.log(x.json);

    const icon = {
      url: "./Images/location.png", // url
      scaledSize: new google.maps.Size(20, 20), // scaled size
    };
  
    // Create multiple markers
    const markerPositions = [
      { lat: 31.771959, lng: 35.217018 },
      { lat: 31.572500, lng: 35.218000 },
      { lat: 31.673000, lng: 35.219000 },
      // Add more marker positions as needed
    ];
  
    markerPositions.forEach((position) => {
      const marker = new google.maps.Marker({
        position: position,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: icon,
      });
  
      // Attach the same info window to each marker
      marker.addListener("click", () => {
        infoWindow.setContent(getInfoWindowContent());
        infoWindow.open(map, marker);
      });
  
      markers.push(marker);
    });
  
    infoWindow = new google.maps.InfoWindow();
  }
  
  function getInfoWindowContent() {
    return "<div style='width: 200px; height: 450px; text-align: right;'><img src='./Images/infowindowImage.png' style='max-width: 100%; height: auto;' /><p style='direction: rtl;'>רשת קמעונאית שמוכרים בה מגוון של נעליים, בגדים ואביזרי ספורט מבית <strong style='font-weight: bold;'>Sportify</strong>.</p><p></p><p></p><p style='direction: rtl;'><strong>שעות פעילות:</strong></p><p style='direction: rtl;'>יום ראשון 9:30–21:30</p><p style='direction: rtl;'>יום שני 9:30–21:30</p><p style='direction: rtl;'>יום שלישי 9:30–21:30</p><p style='direction: rtl;'>יום רביעי 9:30–21:30</p><p style='direction: rtl;'>יום חמישי 9:30–21:30</p><p style='direction: rtl;'>יום שישי 9:00–14:30</p><p style='direction: rtl;'>יום שבת 10:00–23:00</p><p style='direction: rtl;'></p><p style='direction: rtl;'>הצעת שעות פעילות חדשות</p><p></p><p style='direction: rtl;'><strong>052-5845841</strong></p><p></p><p></p></div>";
  }
  
  initMap();