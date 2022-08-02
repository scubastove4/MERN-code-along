import RestaurantCard from '../components/RestaurantCard'

const RestaurantList = ({ restaurants }) => {
  return (
    <section className="page" id="restaurant-list">
      <h2>Restaurants</h2>
      <div className="flex">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  )
}

export default RestaurantList
