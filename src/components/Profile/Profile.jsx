import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  weatherData,
  handleCardClick,
  clothingItems,
  handleAddClick,
  handleProfileUpdate,
  onCardLike,
  handleSignOut,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleProfileUpdate={handleProfileUpdate}
          signOut={handleSignOut}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
