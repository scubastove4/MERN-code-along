const { Router } = require('express')
const router = Router()
const { restaurants, reviews } = require('../controllers') //could also destructure restaurants from controllers

// restaurant routes
router.get('/restaurants', restaurants.getAllRestaurants)
router.post('/restaurants', restaurants.createRestaurant)
router.get('/restaurants/:restaurantId', restaurants.getRestaurantById)
router.post('/restaurants/:restaurantId/review', reviews.createReview)
// reviews.createReview)

//review routes
router.get('/reviews', reviews.getAllReviews)
router.get('/reviews/:reviewId', reviews.getReviewById)
router.put('/reviews/:reviewId', reviews.updateReview)
router.delete('/reviews/:reviewId', reviews.deleteReview)

module.exports = router
