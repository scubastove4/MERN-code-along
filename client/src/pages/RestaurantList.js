import RestaurantCard from '../components/RestaurantCard'

const RestaurantList = ({ restaurants, chooseRestaurant }) => {
  return (
    <section className="page" id="restaurant-list">
      <h2>Restaurants</h2>
      <div className="flex">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            onClick={() => chooseRestaurant(restaurant)}
          >
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default RestaurantList
