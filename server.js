const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const routes = require('./routes')

const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

// ROUTES
app.use('/api', routes)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`I am currently running on port ${PORT}`)
})
