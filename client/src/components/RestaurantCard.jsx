const RestaurantCard = ({ restaurant }) => {
  return (
    <span className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <h4>{restaurant.location}</h4>
    </span>
  )
}

export default RestaurantCard
