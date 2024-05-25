APIkey = "139f5f373fe401819e65874006058b5e";

var weatherData = null;

function showDetails() {
  let input = document.getElementById("cityName").value;
  cityname = input;
  console.log(cityname);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("data not fetched");
      }
      return response.json();
    })
    .then((data) => {
      weatherData = data;
      console.log(weatherData);
      updated();
    })
    .catch((error) => {
      console.log("error camed", error);
    });
}
function updated() {
  let temp = document.getElementById("temp");
  let pressure = document.getElementById("pressure");
  temp.innerText = `Temperature is ${weatherData.main.temp}`;
  pressure.innerText = `pressure is ${weatherData.main.pressure}`;
}
