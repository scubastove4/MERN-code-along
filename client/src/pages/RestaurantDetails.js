import { Link } from 'react-router-dom'

import ReviewCard from '../components/ReviewCard'

const RestaurantDetails = ({
  selectedRestaurant,
  deleteReview,
  editReview,
  newReview
}) => {
  return (
    <section className="page">
      <div>
        {selectedRestaurant ? (
          <main>
            <h1>{selectedRestaurant.name}</h1>
            <img src={selectedRestaurant.photo_url} alt="Restaurant" />
            <h1>{selectedRestaurant.location}</h1>
            <div className="reviews">
              <h1>Reviews</h1>
              <button onClick={newReview}>Write A Review</button>

              {selectedRestaurant.reviews.length > 0 ? (
                <section>
                  {selectedRestaurant.reviews.map((review, index) => (
                    <ReviewCard
                      key={review._id}
                      review={review}
                      index={index}
                      editReview={editReview}
                      deleteReview={deleteReview}
                    />
                  ))}
                </section>
              ) : (
                <h2>Be the first to write a review!</h2>
              )}
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
