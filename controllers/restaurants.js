const { Restaurant } = require('../models')

//get all restaurants
const getAllRestaurants = async (req, res) => {
  let restaurants = await Restaurant.find({})
  res.send({ restaurants })
}

//create new restaurant
const createRestaurant = async (req, res) => {
  let newRestaurant = await Restaurant.create(req.body)
  res.send(newRestaurant)
}

//get one restaurant
const getRestaurantById = async (req, res) => {
  let restaurantById = await Restaurant.findById(req.params.id)
  res.send({ restaurantById })
}

module.exports = {
  getAllRestaurants,
  createRestaurant,
  getRestaurantById
}
