import { displayData } from "./displayData";

async function getWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=cb043f74de124798b5073115241605&q=${city}`
  );
  const data = await response.json();
  const feelsLike = data.current.condition.text;
  const location = data.location.name;
  const weatherIcon = data.current.condition.icon;
  const tempreture = data.current.temp_c;
  const tempretureFeelsLike = data.current.feelslike_c;

  displayData(
    feelsLike,
    location,
    weatherIcon,
    tempreture,
    tempretureFeelsLike
  );
}

export function getCityName() {
  const cityName = document.querySelector("#city");
  const cityForm = document.querySelector("form");

  cityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    getWeather(cityName.value);
  });
}
