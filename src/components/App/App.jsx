import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { setToken, getToken } from "../../utils/token";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoutes";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import {
  getItems,
  addItem,
  deleteItem,
  getUserInfo,
  setUserInfo,
} from "../../utils/api";
import { getCurrentWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";

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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleRegistration = ({ email, password, name, avatar }) => {
    if (email && password && name && avatar) {
      auth
        .signUp({ email, password, name, avatar })
        .then(() => {
          navigate("/signin");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .signIn({ email, password })
      .then((data) => {
        if (data.jwt) {
          setToken(data.jwt);
          setCurrentUser(data.user);
          setIsLoggedIn(true);
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleLoginModal = () => {
    console.log("clicked");
    setActiveModal("login");
  };

  const handleSignUp = () => {
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
    const jwt = getToken();

    if (!jwt) {
      return;
    }
    api.getUserInfo(jwt).then(({ email, password }) => {
      setIsLoggedIn(true);
      setCurrentUser({ email, password });
      navigate("/profile");
    });
  }, []);

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
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              handleSignUp={handleSignUp}
              handleLoginModal={handleLoginModal}
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
                    activeModal={activeModal}
                    handleRegistration={handleRegistration}
                    handleLogin={handleLogin}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      userData={currentUser}
                      weatherData={weatherData}
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                    />
                  </ProtectedRoute>
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

          <RegisterModal
            isOpen={activeModal === "signup"}
            handleModalClose={handleModalClose}
            handleRegistration={handleRegistration}
          />

          <LoginModal
            isOpen={activeModal === "login"}
            handleModalClose={handleModalClose}
            handleLogin={handleLogin}
          />

          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={handleModalClose}
            handleDeleteCard={handleDeleteCard}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
