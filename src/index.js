import "./style.css";
import { getCityName, getWeather } from "./weatherData";
import { setBgImg } from "./setBackground";

getWeather("new delhi"); //for default display
setBgImg();
getCityName();
