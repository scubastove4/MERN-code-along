import { useLocation } from 'react-router-dom'

const ReviewForm = ({ formState, handleChange, handleSubmit }) => {
  let location = useLocation()

  return (
    <section className="page">
      <h1>Review Form</h1>
      <form
        className="review-form"
        onSubmit={(e) => handleSubmit(e, location.state.index)}
      >
        <input
          type="text"
          name="title"
          placeholder="Review Title"
          onChange={handleChange}
          value={formState.title}
          required
        />
        <input
          type="text"
          name="body"
          placeholder="Review"
          onChange={handleChange}
          value={formState.body}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formState.name}
          required
        />
        <label htmlFor="rating">Rating</label>
        <select
          defaultValue={formState.rating}
          name="rating"
          id="rating"
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Rating
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type="submit">Submit Review</button>
      </form>
    </section>
  )
}
export default ReviewForm
