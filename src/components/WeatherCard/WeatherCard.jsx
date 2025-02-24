import { useContext } from "react";
import sunny from "../../assets/sunny.png";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext); //this is how you make the currentTemperatureUnit available

  return (
    <section className="weather-card">
      <p className="weather__card-temp">
        {currentTemperatureUnit === "F"
          ? weatherData.weather.F
          : weatherData.weather.C}{" "}
        &deg; {currentTemperatureUnit}
      </p>
      <img src={sunny} alt="sunny" className="weather__card-image" />
    </section>
  );
}

export default WeatherCard;
