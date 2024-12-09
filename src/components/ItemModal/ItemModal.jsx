import "./ItemModal.css";

function ItemModal({ activeModal, card, onClose }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content-type-image">
        <button
          type="button"
          className="modal__close modal__close-item"
          onClick={onClose}
        ></button>
        <img src={card.link} alt="preview image" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
