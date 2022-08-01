const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

const { Restaurant } = require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

// ROUTES
//get all restaurants
app.get('/restaurants', async (req, res) => {
  let restaurants = await Restaurant.find()
  res.send({ restaurants })
})

//create new restaurant
app.post('/restaurants', async (req, res) => {
  let newRestaurant = await Restaurant.create(req.body)
  res.send(newRestaurant)
})

//get one restaurant
app.get('/restaurants/:id', async (req, res) => {
  let restaurantById = await Restaurant.findById(req.params.id)
  res.send({ restaurantById })
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`I am currently running on port ${PORT}`)
})
