const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

//get all restaurants
router.get('/restaurants', controllers.getAllRestaurants)

//create new restaurant
router.post('/restaurants', controllers.createRestaurant)

//get one restaurant
router.get('/restaurants/:id', controllers.getRestaurantById)

module.exports = router
