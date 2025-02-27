import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";
import logo from "../../assets/logo.svg";
import avatarPlaceholder from "../../assets/placeholder.svg";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleSignUp,
  handleLoginModal,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="WTWR" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {isLoggedIn ? (
        <button
          type="button"
          className="header__add-clothes-button"
          onClick={handleAddClick}
        >
          + Add Clothes
        </button>
      ) : (
        ""
      )}

      {isLoggedIn ? (
        <Link to="/profile" className="header__link">
          <div className="header__user-container">
            <div className="header__user-avatar">
              {currentUser.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt="avatar image"
                  className="header__avatar"
                />
              ) : (
                <div className="header__first-letter-container">
                  <span src={avatarPlaceholder} className="avatar-initial">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <p className="header__username">{currentUser.name} </p>
          </div>
        </Link>
      ) : (
        <>
          {" "}
          <button
            type="button"
            onClick={handleSignUp}
            className="header__signup"
          >
            Sign Up
          </button>
          <button
            onClick={handleLoginModal}
            type="button"
            className="header__login"
          >
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
