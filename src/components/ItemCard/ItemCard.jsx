function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li key={item._id} className="clothing__card-item">
      <h2 className="clothing__card-title">{item.name}</h2>
      <img
        src={item.link}
        alt={item.name}
        onClick={handleCardClick}
        className="clothing__card-image"
      />
    </li>
  );
}

export default ItemCard;
