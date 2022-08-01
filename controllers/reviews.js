const { Review } = require('../models')
const { Restaurant } = require('../models')

//get all restaurants
const getAllReviews = async (req, res) => {
  let reviews = await Review.find({})
  res.send({ reviews })
}

//create new restaurant
const createReview = async (req, res) => {
  let newReview = await Review.create(req.body)
  let restaurant = await Restaurant.findById(req.params.id)
  restaurant.reviews.push(newReview._id)
  restaurant.save()
  res.send(restaurant)
}

// get one restaurant
const getReviewById = async (req, res) => {
  let review = await Review.findById(req.params.id)
  res.send({ review })
}

// update review
const updateReview = async (req, res) => {
  let updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.send({ updatedReview })
}

// delete review
const deleteReview = async (req, res) => {
  let deletedReview = await Review.findByIdAndDelete(req.params.id)
  res.send(deletedReview)
}

module.exports = {
  getAllReviews,
  createReview,
  getReviewById,
  updateReview,
  deleteReview
}
