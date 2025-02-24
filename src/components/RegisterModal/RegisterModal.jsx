import { useState } from "react";

function RegisterModal({ handleModalClose, isOpen, handleRegistration }) {
  // const [data, setData] = useState({ email, password, name, avatarUrl });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({ email, password, name, avatar });
    handleModalClose();
    email = "";
    password = "";
    name = "";
    avatar = "";
  };

  return (
    <div className="modal__container">
      <div className={`modal ${isOpen ? "modal_opened" : ""} `}>
        <form onSubmit={handleSubmit} className="modal__form">
          <div className="modal__header">
            <h2 className="modal__title">Sign up</h2>
            <div onClick={handleModalClose} className="modal__close"></div>
          </div>
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
            <label htmlFor="password" className="modal__label">
              Password
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="modal__input"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <label htmlFor="name" className="modal__label">
              Name
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="modal__input"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label htmlFor="avatarUrl" className="modal__label">
              Avatar URL
              <input
                id="avatarUrl"
                type="URL"
                placeholder="Avatar URL"
                className="modal__input"
                onChange={(e) => {
                  setAvatar(e.target.value);
                }}
              />
            </label>
          </fieldset>
          <button type="submit" className="modal__register-btn">
            Next
          </button>
          <button type="button" className="modal__login-btn">
            or Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
