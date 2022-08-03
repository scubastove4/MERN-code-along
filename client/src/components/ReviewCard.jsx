const ReviewCard = ({ review, deleteReview, index }) => {
  return (
    <span className="review-card">
      <h3>{review.title}</h3>
      <div id="rev-name-rate">
        <h2>{review.name}</h2>
        <h2>{review.rating}</h2>
      </div>
      <h3>{review.body}</h3>
      <button onClick={() => deleteReview(review, index)}>X</button>
    </span>
  )
}

export default ReviewCard
