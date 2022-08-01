const { Router } = require('express')
const router = Router()
const { restaurants, reviews } = require('../controllers') //could also destructure restaurants from controllers

// restaurant routes
router.get('/restaurants', restaurants.getAllRestaurants)
router.post('/restaurants', restaurants.createRestaurant)
router.get('/restaurants/:id', restaurants.getRestaurantById)
router.post('/restaurants/:id/reviews', reviews.createReview)
// reviews.createReview)

//review routes
router.get('/reviews', reviews.getAllReviews)
router.get('/reviews/:id', reviews.getReviewById)
router.put('/reviews/:id', reviews.updateReview)
router.delete('/reviews/:id', reviews.deleteReview)

module.exports = router
