import "./ClothesSection.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  weatherData,
  handleCardClick,
  clothingItems,
  handleAddClick,
  onCardLike,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="clothing">
      <div className="clothing__content">
        <p className="clothing__title">Your Items</p>
        <button className="clothing__add-btn" onClick={handleAddClick}>
          {" "}
          + Add New
        </button>
      </div>
      <div className="clothing__list">
        <ul className="clothing__card-list">
          {clothingItems
            .filter((item) => item.owner === currentUser._id)
            .map((item) => {
              console.log(clothingItems);
              console.log(item);
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
