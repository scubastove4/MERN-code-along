const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

app.use(express.static(`${__dirname}/client/build`))

app.get('/restaurants', (req, res) => {
  res.send('I am root')
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`I am currently running on port ${PORT}`)
})
