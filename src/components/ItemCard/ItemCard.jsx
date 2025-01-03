function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="clothing__card-item">
      <h2 className="clothing__card-title">{item.name}</h2>
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
