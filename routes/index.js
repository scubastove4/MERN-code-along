const { Router } = require('express')
const router = Router()
const { restaurants, reviews } = require('../controllers') //could also destructure restaurants from controllers

// restaurant routes
router.get('/restaurants', restaurants.getAllRestaurants)
router.post('/restaurants', restaurants.createRestaurant)
router.get('/restaurants/:id', restaurants.getRestaurantById)

//review routes
router.get('/reviews', reviews.getAllReviews)
router.post('/reviews', reviews.createReview)
router.get('/reviews/:id', reviews.getReviewById)
router.put('/reviews/:id', reviews.updateReview)

module.exports = router
