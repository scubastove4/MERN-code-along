const { Review } = require('../models')

//get all restaurants
const getAllReviews = async (req, res) => {
  let reviews = await Review.find({})
  res.send({ reviews })
}

//create new restaurant
// const createRestaurant = async (req, res) => {
//   let newRestaurant = await Restaurant.create(req.body)
//   res.send(newRestaurant)
// }

//get one restaurant
// const getRestaurantById = async (req, res) => {
//   let restaurantById = await Restaurant.findById(req.params.id)
//   res.send({ restaurantById })
// }

module.exports = {
  getAllReviews
}
