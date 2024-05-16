export function displayData(
  feelsLike,
  location,
  weatherIcon,
  tempreture,
  tempretureFeelsLike
) {
  const display = document.querySelector(".weather-data");
  const icon = new Image();
  icon.src = weatherIcon;

  display.innerHTML = `
    <p>${feelsLike}</p>
    <p>${location}</p>
    <p>${tempreture}</p>
    <p>${tempretureFeelsLike}</p>
  `;

  display.append(icon);
}
