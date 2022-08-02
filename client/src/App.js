import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
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
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getRestaurants = async () => {
      let res = await axios.get(`${BASE_URL}/api/restaurants`)
      // console.log(res.data.restaurants)
      setRestaurants(res.data.restaurants)
    }
    getRestaurants()
  }, [])

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route
            path="restaurants/:restaurantId"
            element={<RestaurantDetails />}
          />
          <Route path="/add" element={<RestaurantForm />} />
          <Route
            path="/restaurants/:restaurantId/review/:reviewId"
            element={<ReviewDetails />}
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
