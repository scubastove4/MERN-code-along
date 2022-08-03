import ReviewCard from '../components/ReviewCard'

const RestaurantDetails = ({ selectedRestaurant }) => {
  return (
    <section className="page">
      <div>
        {selectedRestaurant ? (
          <main>
            <h1>{selectedRestaurant.name}</h1>
            <img src={selectedRestaurant.photo_url} alt="Restaurant" />
            <h1>{selectedRestaurant.location}</h1>
            <div className="reviews">
              {selectedRestaurant.reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </div>
          </main>
        ) : (
          <h1>Oops! Return to Restaurants page!</h1>
        )}
      </div>
    </section>
  )
}

export default RestaurantDetails
