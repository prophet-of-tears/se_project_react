import "./ItemModal.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, card, onClose, handleDeleteCard }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content-type-image">
        <button
          type="button"
          className="modal__close modal__close-item"
          onClick={onClose}
        ></button>
        <img src={card.imageUrl} alt="preview image" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">weather: {card.weather}</p>
        </div>
        <button
          onClick={() => handleDeleteCard(card._id)}
          type="button"
          className={`modal__delete-btn ${
            isOwn ? "" : "modal__delete-btn_hidden"
          } `}
        >
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
