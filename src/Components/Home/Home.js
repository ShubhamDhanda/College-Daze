
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
    <nav>
        <label class="logo">College-Dayz</label>
        <ul><li>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/shopkeeper">Shopkeeper</Link>
            <Link to="active">Home</Link>
        </li></ul>
        <label id="icon">
            <i class="fas fa-bars"></i>
        </label>
    </nav>
    </>
  )
}

export default Home;