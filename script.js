const apiKey = "8f85e995f4e2f196c5bd4b1c7efa86b9"; // Replace with your valid API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    // Update weather data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    // Display weather data and hide error message
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

btn.addEventListener("click", () => {
  const city = search.value.trim();
  if (city) {
    checkWeather(city);
  }
});
