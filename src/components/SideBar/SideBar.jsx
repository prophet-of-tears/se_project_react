import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ handleProfileUpdate, signOut }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img
          src={currentUser.avatar}
          alt="sidebar content"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>

      <div className="sidebar__profile">
        <button
          onClick={handleProfileUpdate}
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
