import sunny from "../../assets/sunny.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather__card-temp">{weatherData.temp.F} &deg; F</p>
      <img src={sunny} alt="sunny" className="weather__card-image" />
    </section>
  );
}

export default WeatherCard;
