export function displayData(
  feelsLike,
  location,
  temperature,
  temperatureFeelsLike
) {
  const display = document.querySelector(".weather-data");

  display.innerHTML = `
    <div class="weather-card">
    <p class="temperature"><span>${temperature}°C</span></p>
    <p class="location"><span>${location}</span></p>
      <p class="feels-like">Feels Like: <span>${temperatureFeelsLike}°C</span></p>
      <p class="feels-like"><span>${feelsLike}</span></p>
    </div>
  `;
}
