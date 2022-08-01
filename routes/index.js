const { Router } = require('express')
const router = Router()
const controllers = require('../controllers') //could also destructure restaurants from controllers

//get all restaurants
router.get('/restaurants', controllers.restaurants.getAllRestaurants)

//create new restaurant
router.post('/restaurants', controllers.restaurants.createRestaurant)

//get one restaurant
router.get('/restaurants/:id', controllers.restaurants.getRestaurantById)

module.exports = router
