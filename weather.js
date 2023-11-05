const apiKey = "28f307a46c0514435031e53ba4c843bf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
   console.log(data);

  cityElement.innerHTML = data.name;
  tempElement.innerHTML = Math.round(data.main.temp) + "°C";
  humidityElement.innerHTML = data.main.humidity + "%";
  windElement.innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main=="clouds"){
    weatherIcon.src="images/clouds.png";
  }else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png";
  }else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png";
}else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png";
}else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png";
}


}
searchBtn.addEventListener("click", () => {
  const city = searchBox.value;
  checkWeather(city);
});
checkWeather("Berlin");
