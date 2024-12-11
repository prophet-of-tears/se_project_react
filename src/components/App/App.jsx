import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getCurrentWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: "999" },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getCurrentWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
      </div>
      <ModalWithForm
        buttonText="Add Garment"
        title="New Garment"
        isOpen={activeModal === "add-garment"}
        handleClose={handleModalClose}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="modal__input"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image
          <input
            id="imageUrl"
            type="url"
            placeholder="Image URL"
            className="modal__input"
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
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={handleModalClose}
      />
      <Footer />
    </div>
  );
}

export default App;
