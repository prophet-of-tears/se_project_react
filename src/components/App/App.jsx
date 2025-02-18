import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { getItems, addItem, deleteItem } from "../../utils/api";
import { getCurrentWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    weather: { F: "999", C: "999" },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleSignUp = () => {
    console.log("it works");
    setActiveModal("signup");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  const handleDeleteCard = (card) => {
    deleteItem(card)
      .then(() => {
        console.log("Delete response:", card);
        setClothingItems((prevCards) =>
          prevCards.filter((card) => card._id !== selectedCard._id)
        );
        handleModalClose();
      })
      .catch(console.error);
  };

  const onAddItem = (values) => {
    addItem(values)
      .then((res) => {
        setClothingItems((prev) => [res, ...prev]);
        handleModalClose();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getCurrentWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);

        return data;
      })
      .catch(console.error);
  }, []);

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") {
      setCurrentTemperatureUnit("F");
    }
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    }
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            handleSignUp={handleSignUp}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleModalClose={handleModalClose}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          buttonText="Add Garment"
          title="New Garment"
          isOpen={activeModal === "add-garment"}
          handleClose={handleModalClose}
          onAddItem={onAddItem}
        />

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={handleModalClose}
          handleDeleteCard={handleDeleteCard}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
