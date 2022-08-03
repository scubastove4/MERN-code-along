import Nav from './components/Nav'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Home from './pages/Home'
import RestaurantList from './pages/RestaurantList'
import RestaurantDetails from './pages/RestaurantDetails'
import RestaurantForm from './pages/RestaurantForm'
import ReviewDetails from './pages/ReviewDetails'
import ReviewForm from './pages/ReviewForm'
import { BASE_URL } from './globals'

import './App.css'

const App = () => {
  let navigate = useNavigate()

  let initialFormState = {
    name: '',
    title: '',
    body: '',
    rating: Number()
  }

  const [anger, setAnger] = useState('😠')
  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [formState, setFormState] = useState(initialFormState)

  const getRestaurants = async () => {
    let res = await axios.get(`${BASE_URL}/api/restaurants`)
    setRestaurants(res.data)
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const toggleEmoji = () => {
    if (anger === '😠') {
      setAnger('😡')
    } else if (anger === '😡') {
      setAnger('🤬')
    } else if (anger === '🤬') {
      setAnger('😠')
    }
  }

  const chooseRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant)
    navigate(`/restaurants/${restaurant._id}`)
  }

  const deleteReview = async (review, index) => {
    await axios.delete(`${BASE_URL}/api/reviews/${review._id}`)
    getRestaurants()
    let modifiedRestaurant = selectedRestaurant
    modifiedRestaurant.reviews.splice(index, 1)
    setSelectedRestaurant(modifiedRestaurant)
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(
      `${BASE_URL}/api/restaurants/${selectedRestaurant._id}/review`,
      { ...formState, restaurant: selectedRestaurant._id }
    )
    await getRestaurants()
    let modifiedRestaurant = selectedRestaurant
    modifiedRestaurant.reviews.push(res.data)
    setSelectedRestaurant(modifiedRestaurant)

    setFormState({
      name: '',
      title: '',
      body: '',
      rating: Number()
    })
    navigate(`/restaurants/${selectedRestaurant._id}`)
  }

  return (
    <div className="app">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            index
            element={<Home toggleEmoji={toggleEmoji} anger={anger} />}
          />
          <Route
            path="/restaurants"
            element={
              <RestaurantList
                restaurants={restaurants}
                chooseRestaurant={chooseRestaurant}
                deleteReview={deleteReview}
              />
            }
          />
          <Route path="/add" element={<RestaurantForm />} />
          <Route
            path="/restaurants/:restaurantId/review/:reviewId"
            element={<ReviewDetails />}
          />
          <Route
            path="/restaurants/:restaurantId"
            element={
              <RestaurantDetails selectedRestaurant={selectedRestaurant} />
            }
          />
          <Route
            path="/restaurants/:restaurantId/review"
            element={
              <ReviewForm
                formState={formState}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
