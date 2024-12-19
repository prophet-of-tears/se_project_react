import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleClose, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link });
  };

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
          value={link}
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
          />
          Hot
        </label>
        <label htmlFor="Warm" className=" modal__label-type-radio">
          <input
            name="radio"
            id="Warm"
            type="radio"
            className="modal__radio-input"
          />
          Warm
        </label>
        <label htmlFor="Cold" className=" modal__label-type-radio">
          <input
            name="radio"
            id="Cold"
            type="radio"
            className="modal__radio-input"
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
