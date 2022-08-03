const ReviewCard = ({ review, deleteReview, index, editReview }) => {
  let emojiRating
  let grayEmojis

  const getEmojiRating = () => {
    switch (review.rating) {
      case 5:
        emojiRating = '🤤🤤🤤🤤🤤'
        grayEmojis = ''
        break
      case 4:
        emojiRating = '🙂🙂🙂🙂'
        grayEmojis = '😐'
        break
      case 3:
        emojiRating = '😠😠😠'
        grayEmojis = '😐😐'
        break
      case 2:
        emojiRating = '😡😡'
        grayEmojis = '😐😐😐'
        break
      case 1:
        emojiRating = '🤬'
        grayEmojis = '😐😐😐😐'
        break
      default:
        emojiRating = 'Review Pending'
        grayEmojis = ''
    }
  }
  getEmojiRating()

  return (
    <span className="review-card">
      <div className="review-top">
        <h2 className="review-title">{review.title}</h2>
        <button onClick={() => deleteReview(review, index)}>X</button>
        <h2 className="card-rating">
          {emojiRating}
          <span>{grayEmojis}</span>
        </h2>
      </div>
      <h3>{review.body}</h3>
      <div className="review-bottom">
        <h2>{review.name}</h2>
        <button onClick={() => editReview(review, index)}>Edit Review</button>
      </div>
    </span>
  )
}

export default ReviewCard
