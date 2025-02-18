import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/logo.svg";
//import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData, handleSignUp }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="WTWR" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        type="button"
        className="header__add-clothes-button"
        onClick={handleAddClick}
      >
        + Add Clothes
      </button>
      <button type="button" onClick={handleSignUp} className="header__signup">
        Sign Up
      </button>
      <button type="button" className="header__login">
        Log In
      </button>
      {/* <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <p className="header__username">Jeremiah Partee</p>
          <img src={avatar} alt="avatar image" className="header__avatar" />
        </div>
      </Link> */}
    </header>
  );
}

export default Header;
