import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, handleLogin, handleLoginSwitch, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    handleLogin(userData);
  };

  return (
    <ModalWithForm
      title="log in"
      isOpen={isOpen}
      handleClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="Email" className="modal__label">
        Email
        <input
          type="email"
          id="Email"
          value={email}
          placeholder="Email"
          className="modal__input"
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          type="login-password"
          id="password"
          value={password}
          placeholder="Password"
          className="modal__input"
          onChange={handlePasswordChange}
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
    </ModalWithForm>
  );
}

export default LoginModal;
