import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ handleProfileUpdate, signOut }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const handleOpen = () => {
    handleProfileUpdate();
  };

  return (
    <div className="sidebar">
      <div className="sidebar__container">
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
        <p className="sidebar__username">{currentUser.name}</p>
      </div>

      <div className="sidebar__profile">
        <button
          onClick={handleOpen}
          type="button"
          className="sidebar__profile-update"
        >
          Change profile data
        </button>
        <button
          onClick={signOut}
          type="button"
          className="sidebar__profile-logout"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
