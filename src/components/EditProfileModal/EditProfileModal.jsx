import "./EditProfileModal.css";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ activeModal, onClose, updateUser }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, avatar });
    onClose();
  };

  return (
    <div className={`modal ${activeModal === "update" && "modal_opened"}`}>
      <form onSubmit={handleSubmit} className="modal__form">
        <h2 className="modal__title">Change profile data</h2>
        <button
          type="button"
          onClick={onClose}
          className="modal__close"
        ></button>

        <label htmlFor="name" className="modal__label">
          Name
          <input
            value={name}
            type="text"
            placeholder="Name"
            id="name"
            className="modal__input"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="avatarUrl" className="modal__label">
          Avatar
          <input
            value={avatar}
            type="url"
            placeholder="Avatar"
            id="avatar URL"
            className="modal__input"
            onChange={(e) => setAvatar(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className={`modal__submit-btn ${
            name || avatar ? "modal__submit-btn_active" : ""
          }`}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfileModal;
