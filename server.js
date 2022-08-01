const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

const { Restaurant } = require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

app.get('/restaurants', async (req, res) => {
  let restaurants = await Restaurant.find()
  res.send({ restaurants })
})

app.post('/restaurants', async (req, res) => {
  let newRestaurant = await Restaurant.create(req.body)
  res.send(newRestaurant)
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`I am currently running on port ${PORT}`)
})
