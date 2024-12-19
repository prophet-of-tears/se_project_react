import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ weatherData, handleCardClick }) {
  return (
    <div className="clothing">
      <div className="clothing__content">
        <p className="clothing__title">Your Items</p>
        <button className="clothing__add-btn"> + Add New</button>
      </div>
      <div className="clothing__list">
        <ul className="clothing__card-list">
          {defaultClothingItems
            .filter((item) => {
              return item;
              //   return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
