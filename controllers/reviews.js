const { Review } = require('../models')

//get all restaurants
const getAllReviews = async (req, res) => {
  let reviews = await Review.find({})
  res.send({ reviews })
}

//create new restaurant
const createReview = async (req, res) => {
  let newReview = await Review.create(req.body)
  res.send(newReview)
}

// get one restaurant
const getReviewById = async (req, res) => {
  let review = await Review.findById(req.params.id)
  res.send({ review })
}

module.exports = {
  getAllReviews,
  createReview,
  getReviewById
}
