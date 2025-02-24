import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.jsx";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

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
          {clothingItems
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

      {/* <RegisterModal
        isOpen={activeModal === "signup"}
        handleModalClose={handleModalClose}
        handleRegistration={handleRegistration}
      /> */}

      {/* <LoginModal
        isOpen={activeModal === "login"}
        handleModalClose={handleModalClose}
        handleLogin={handleLogin}
      /> */}
    </main>
  );
}

export default Main;
