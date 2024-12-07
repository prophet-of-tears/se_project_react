import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="WTWR" className="header__logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        type="button"
        className="header__add-clothes-button"
        onClick={handleAddClick}
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Jeremiah Partee</p>
        <img src={avatar} alt="avatar image" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;