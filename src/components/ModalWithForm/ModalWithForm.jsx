function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleClose,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" ? "modal_opened" : ""}`}
    >
      <form action="" className="modal__form">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={handleClose}
        ></button>
        {children}
        <button type="submit" className="modal__submit-btn">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default ModalWithForm;