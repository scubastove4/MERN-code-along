const { Restaurant } = require('../models')

//get all restaurants
const getAllRestaurants = async (req, res) => {
  let restaurants = await Restaurant.find({}).populate('reviews')
  res.send({ restaurants })
}

//create new restaurant
const createRestaurant = async (req, res) => {
  let newRestaurant = await Restaurant.create(req.body)
  res.send(newRestaurant)
}

//get one restaurant
const getRestaurantById = async (req, res) => {
  let restaurant = await Restaurant.findById(req.params.id).populate('reviews')
  res.send({ restaurant })
}

module.exports = {
  getAllRestaurants,
  createRestaurant,
  getRestaurantById
}
