import bgImg from "./background.jpg";

export function setBgImg() {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.style.backgroundImage = `url(${bgImg})`;
}
