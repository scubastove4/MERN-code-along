import { NavLink } from 'react-router-dom' //NavLink has some additional features that Link does not

const NavBar = () => {
  return (
    <nav>
      <h1>iRate</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/restaurants">Restaurants</NavLink>
        <NavLink to="/add">Add A Restaurant</NavLink>
      </div>
    </nav>
  )
}

export default NavBar
