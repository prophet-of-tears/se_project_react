import "./EditProfileModal.css";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditProfileModal({ onClose, isOpen, updateUser }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, avatar });
  };

  return (
    <ModalWithForm
      title="change profile data"
      isOpen={isOpen}
      handleClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="edit-profile-name" className="modal__label">
        Name
        <input
          value={name}
          type="text"
          placeholder="Name"
          id="edit-profile-name"
          className="modal__input"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="edit-avatarUrl" className="modal__label">
        Avatar
        <input
          value={avatar}
          type="url"
          placeholder="Avatar"
          id="edit-avatarUrl"
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
    </ModalWithForm>
  );
}

export default EditProfileModal;
