import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div className='container-fluid nav_bg'>
      <div className='row'>
        <div className='col-10 mx-auto'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Technician</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item me-4">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item me-4">
                  <NavLink className="nav-link" to="Services">Services</NavLink>
                </li>
                <li className="nav-item me-4">
                  <NavLink className="nav-link" to="About">About Us</NavLink>
                </li>
                <li className="nav-item me-4">
                  <NavLink className="nav-link" to="Contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;
