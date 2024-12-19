import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants.js";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.jsx";

function Main({ weatherData, handleCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(weatherData);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="card__weather">
          Today is{" "}
          {currentTemperatureUnit === "F"
            ? weatherData.weather.F
            : weatherData.weather.C}{" "}
          &deg;{currentTemperatureUnit}/ you may want to wear:
        </p>
        <ul className="clothing__card-list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                /> //item must be passed as a prop
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
