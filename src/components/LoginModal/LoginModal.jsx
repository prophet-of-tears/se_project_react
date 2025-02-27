import { useState } from "react";

function LoginModal({
  handleModalClose,
  isOpen,
  handleLogin,
  handleLoginSwitch,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password, avatar, name });
    handleModalClose();
  };

  return (
    <div className="modal__container">
      <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
        <form onSubmit={handleSubmit} className="modal__form">
          <div className="modal__header-login">
            <h2 className="modal__title">Log In</h2>
            <button
              type="button"
              onClick={handleModalClose}
              className="modal__close"
            ></button>
          </div>
          <label htmlFor="Email" className="modal__label">
            Email
            <input
              type="email"
              id="Email"
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
              type="password"
              id="password"
              placeholder="Password"
              className="modal__input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>

          <button
            type="submit"
            className={`modal__signin-btn ${
              email && password ? "modal__signin-btn_active" : ""
            }`}
          >
            Log in{" "}
          </button>
          <button
            onClick={handleLoginSwitch}
            type="button"
            className="modal__new-profile"
          >
            or Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
