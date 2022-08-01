const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => {
  res.send('I am root')
})

app.listen(PORT, () => {
  console.log(`I am currently running on port ${PORT}`)
})
