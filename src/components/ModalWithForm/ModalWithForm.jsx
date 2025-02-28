function ModalWithForm({ children, title, isOpen, handleClose, onSubmit }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <form className="modal__form" onSubmit={onSubmit}>
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={handleClose}
        ></button>
        {children}
      </form>
    </div>
  );
}

export default ModalWithForm;
