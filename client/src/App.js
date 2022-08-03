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

  const [anger, setAnger] = useState('😠')
  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState({})

  useEffect(() => {
    const getRestaurants = async () => {
      let res = await axios.get(`${BASE_URL}/api/restaurants`)
      setRestaurants(res.data)
    }
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
            element={<ReviewForm />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
