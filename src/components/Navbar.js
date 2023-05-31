import React from 'react'
import './NavBar.css'
import logo from '../images/logo.PNG'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar navbar-light bg-light justify-content-between shadow">
    <NavLink className="navbar-brand ms-5" to="/"><img src={logo} alt='logo' height="45px" />
    </NavLink>
    <form className="form-inline me-md-5 ">
      <div className="d-flex align-items-center">
        <input className="searchBox form-control  me-2 text-muted" type="search" placeholder="Search" aria-label="Search" />
        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        <a className='nav-link text-dark fs-5 search-icon' href='#'><i class="fa-solid fa-magnifying-glass"></i></a>
        <a className='nav-link text-dark fs-5' href='#'><i class="fa-solid fa-house"></i></a>
        <a className='nav-link text-dark fs-5' href='#'><i class="fa-regular fa-heart"></i></a>
        <NavLink className='nav-link text-dark fs-5' to='myprofile'><i class="fa-solid fa-circle"></i></NavLink>
      </div>
    </form>
  </nav>
  </div>
  )
}

export default Navbar