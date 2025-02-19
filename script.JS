const apikey = "b98726c7e7ef77912d37cf5ea91a6de7";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");

async function checkweather(city) {
const response = await fetch(api_url + `&q=${city}&appid=${apikey}`);
if (response.status == 404) {
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";  // Hide the weather section on error
} else {
var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if (data.weather[0].main == "Clouds") {
    weather_icon.src = "images/clouds.png";
} else if (data.weather[0].main == "Rain") {
    weather_icon.src = "images/rain.png";
} else if (data.weather[0].main == "Drizzle") {
    weather_icon.src = "images/drizzle.png";
} else if (data.weather[0].main == "Mist") {
    weather_icon.src = "images/mist.png";
}

// Display the weather section once data is fetched
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";  // Hide error message if city is found
}
}


searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});