let CityInput = document.getElementById('city_input'),
searchBtn= document.getElementById('searchBtn'),
API_key = '6564e172e573ba3e5de617695b4ac6b7';

function getCityCoordinates(){
  let cityName = CityInput.value.trim();
 console.log(cityName);
}
searchBtn.addEventListener('click', getCityCoordinates);