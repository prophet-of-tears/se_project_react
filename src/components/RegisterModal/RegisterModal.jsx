import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  onClose,
  isOpen,
  handleRegistration,
  handleRegisterSwitch,
}) {
  // const [data, setData] = useState({ email, password, name, avatarUrl });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      handleClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="register__modal-content">
        <label htmlFor="email" className="modal__label">
          Email
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="modal__input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="register-password" className="modal__label">
          Password
          <input
            id="register-password"
            type="password"
            placeholder="Password"
            className="modal__input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label htmlFor="register-name" className="modal__label">
          Name
          <input
            id="register-name"
            type="text"
            placeholder="Name"
            className="modal__input"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="register-avatarUrl" className="modal__label">
          Avatar URL
          <input
            id="register-avatarUrl"
            type="URL"
            placeholder="Avatar URL"
            className="modal__input"
            onChange={(e) => {
              setAvatar(e.target.value);
            }}
          />
        </label>
      </fieldset>
      <button
        type="submit"
        className={`modal__register-btn ${
          (email && password && name) || avatar
            ? "modal__register-btn_active"
            : ""
        }`}
      >
        Next
      </button>
      <button
        onClick={handleRegisterSwitch}
        type="button"
        className="modal__login-btn"
      >
        or Log in
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
