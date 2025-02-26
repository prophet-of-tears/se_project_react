import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  console.log("current user", currentUser);

  const isLiked = item.likes.find((id) => id === currentUser._id)
    ? true
    : false;

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike(item, isLiked);
  };

  console.log(isLiked);

  //isLiked should be true if the currently logged in user's id exists inside of the 'likes' array. Otherwise it should be false

  return (
    <li className="clothing__card-item">
      <h2 className="clothing__card-title">{item.name}</h2>
      {currentUser._id(
        <button
          onClick={handleLike}
          type="button"
          className={` clothing__like-btn ${
            isLiked ? "clothing__like-btn_liked" : ""
          }`}
        ></button>
      )}

      <img
        src={item.imageUrl}
        alt={item.name}
        onClick={handleCardClick}
        className="clothing__card-image"
      />
    </li>
  );
}

export default ItemCard;
