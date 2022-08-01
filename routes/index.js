const { Router } = require('express')
const router = Router()
const controllers = require('../controllers') //could also destructure restaurants from controllers

// restaurant routes
router.get('/restaurants', controllers.restaurants.getAllRestaurants)
router.post('/restaurants', controllers.restaurants.createRestaurant)
router.get('/restaurants/:id', controllers.restaurants.getRestaurantById)

//review routes
router.get('/reviews', (req, res) => {
  res.send('reviews route works!')
})

module.exports = router
