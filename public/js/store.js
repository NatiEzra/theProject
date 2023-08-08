
let map;
let markers = [];
let addresses = []
let infoWindow;
const markerPositions=[];
function addAddresses(){
  const ol = document.getElementById('addressCointaner');
  addresses.forEach(address=>{
    const el = document.createElement('li');
    el.textContent = address; 
    ol.appendChild(el);
  })

}
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
      center: { lat: 31.771959, lng: 35.217018 },
      zoom: 8,
    });
  
    const x=await fetch('/ourstores').
      then(response=>response.json())
      .then(data=>{
        
        data.forEach(store=>{
          let { lat, lng,Address } = store;
          addresses.push(Address)
          lat=parseFloat(lat);
          lng=parseFloat(lng);
          markerPositions.push({ lat, lng });
          console.log(lat);
        });
      });
    console.log(markerPositions);    
    const icon = {
      url: "./Images/location.png", // url
      scaledSize: new google.maps.Size(20, 20), // scaled size
    };

    addAddresses();


    // Create multiple markers
    /*const markerPositions = [
      { lat: 31.771959, lng: 35.217018 },
      { lat: 31.572500, lng: 35.218000 },
      { lat: 31.673000, lng: 35.219000 },
      // Add more marker positions as needed
    ];*/
  
    markerPositions.forEach((position) => {
      const marker = new google.maps.Marker({
        position: position,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: icon,
      });
      infoWindow = new google.maps.InfoWindow();
      
      // Attach the same info window to each marker
      marker.addListener("click", () => {
        infoWindow.setContent(getInfoWindowContent());
        infoWindow.open(map, marker);
      });
  
      markers.push(marker);
    });
  
  }
  
  function getInfoWindowContent() {
    return "<div style='width: 200px; height: 450px; text-align: right;'><img src='./Images/infowindowImage.png' style='max-width: 100%; height: auto;' /><p style='direction: rtl;'>רשת קמעונאית שמוכרים בה מגוון של נעליים, בגדים ואביזרי ספורט מבית <strong style='font-weight: bold;'>Sportify</strong>.</p><p></p><p></p><p style='direction: rtl;'><strong>שעות פעילות:</strong></p><p style='direction: rtl;'>יום ראשון 9:30–21:30</p><p style='direction: rtl;'>יום שני 9:30–21:30</p><p style='direction: rtl;'>יום שלישי 9:30–21:30</p><p style='direction: rtl;'>יום רביעי 9:30–21:30</p><p style='direction: rtl;'>יום חמישי 9:30–21:30</p><p style='direction: rtl;'>יום שישי 9:00–14:30</p><p style='direction: rtl;'>יום שבת 10:00–23:00</p><p style='direction: rtl;'></p><p style='direction: rtl;'>הצעת שעות פעילות חדשות</p><p></p><p style='direction: rtl;'><strong>052-5845841</strong></p><p></p><p></p></div>";
  }
  
  initMap();

  const apiKey = "9490dce8416054d8e60b636d74c937ba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
   
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "../Images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "../Images/clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "../Images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "../Images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "../Images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

function handleSearch() {
    const city = searchBox.value.trim();
    if (city !== "") {
        checkWeather(city);
    }
}

searchBtn.addEventListener("click", handleSearch);

searchBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        handleSearch();
    }
});
