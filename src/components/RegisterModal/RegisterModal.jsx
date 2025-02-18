function RegisterModal(handleModalClose, isOpen) {
  return (
    <div className="modal__container">
      <div className={`modal `}>
        <form action="" className="modal__form">
          <div className="modal__header">
            <h2 className="modal__title">Sign up</h2>
            <div onClick={handleModalClose} className="modal__close"></div>
          </div>
          <fieldset className="register__modal-content">
            <label htmlFor="password" className="modal__label">
              Email
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="modal__input"
              />
            </label>
            <label htmlFor="password" className="modal__label">
              Password
              <input
                id="password"
                type="text"
                placeholder="Password"
                className="modal__input"
              />
            </label>
            <label htmlFor="name" className="modal__label">
              Name
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="modal__input"
              />
            </label>
            <label htmlFor="avatarUrl" className="modal__label">
              Avatar URL
              <input
                id="avatarUrl"
                type="URL"
                placeholder="Avatar URL"
                className="modal__input"
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
