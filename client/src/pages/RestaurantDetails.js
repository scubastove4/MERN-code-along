import ReviewCard from '../components/ReviewCard'

const RestaurantDetails = ({ selectedRestaurant }) => {
  return (
    <section className="page">
      <h1>{selectedRestaurant.name}</h1>
      <img src={selectedRestaurant.photo_url} alt="Restaurant" />
      <h1>{selectedRestaurant.location}</h1>
      <div>
        {selectedRestaurant.reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  )
}

export default RestaurantDetails
