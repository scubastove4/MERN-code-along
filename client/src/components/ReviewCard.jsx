const ReviewCard = ({ review }) => {
  return (
    <span className="review-card">
      <h3>{review.title}</h3>
      <div id="rev-name-rate">
        <h2>{review.name}</h2>
        <h3>{review.rating}</h3>
      </div>
      <h3>{review.body}</h3>
    </span>
  )
}

export default ReviewCard
