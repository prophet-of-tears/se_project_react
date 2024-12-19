import React, { useState, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  // const [currentTemperatureUnit, handleToggleSwitchChange] = useState("F");

  // const handleChange = (e) => {
  //   if (currentTemperatureUnit === "C") {
  //     handleToggleSwitchChange("F");
  //   }
  //   if (currentTemperatureUnit === "F") {
  //     handleToggleSwitchChange("C");
  //   }
  // };
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-C"
            : "switch__slider switch__slider-F"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
