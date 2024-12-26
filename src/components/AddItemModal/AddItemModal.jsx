import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleClose, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");
  const handleUrlChange = (e) => {
    e.preventDefault();
    setImageUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  //console.log(weather);

  return (
    <ModalWithForm
      buttonText="Add Garment"
      title="New Garment"
      isOpen={isOpen}
      handleClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="modal__input"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          id="imageUrl"
          type="url"
          placeholder="Image URL"
          className="modal__input"
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="Hot" className=" modal__label-type-radio">
          <input
            name="radio"
            id="Hot"
            type="radio"
            className="modal__radio-input"
            value="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
          />
          Hot
        </label>
        <label htmlFor="Warm" className=" modal__label-type-radio">
          <input
            name="radio"
            id="Warm"
            type="radio"
            className="modal__radio-input"
            value="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />
          Warm
        </label>
        <label htmlFor="Cold" className=" modal__label-type-radio">
          <input
            name="radio"
            id="Cold"
            type="radio"
            className="modal__radio-input"
            value={"cold"}
            onChange={handleWeatherChange}
            checked={weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
