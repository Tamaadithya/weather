let CityInput = document.getElementById('city_input');
let searchBtn = document.getElementById('searchBtn');

function getCityCoordinates() {
  let cityName = CityInput.value.trim();
  CityInput.value = '';
  if (!cityName) return;
  let GEOCODING_API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
  fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
    console.log(data)
  }).catch(()=>{
    alert(`failed to fetch coordinates of $(cityName)`)
  });
}

searchBtn.addEventListener('click', getCityCoordinates);