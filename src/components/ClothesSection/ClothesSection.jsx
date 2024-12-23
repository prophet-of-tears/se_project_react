import "./ClothesSection.css";

import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  weatherData,
  handleCardClick,
  clothingItems,
  handleAddClick,
}) {
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
            .filter((item) => {
              return item;
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
