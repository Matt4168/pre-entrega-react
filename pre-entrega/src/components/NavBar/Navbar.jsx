import React from 'react'
import Cart from '../cartWidget/CartWidget'
import { NavLink, Link } from "react-router-dom"

function Navbar() {
    const logo = "../src/assets/images/logo.png"
  return (
    <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <img src={logo} alt="logo" height="50px" />
        <Link to={"/"}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./index.html">VynilManiac</a>
        </li>
        </Link>
        <Link to="/categoria/2">
        <li className="nav-item">
          <a className="nav-link" href="./pages/listado.html">Rock</a>
        </li>
        </Link>
        <Link to="/categoria/1">
        <li className="nav-item">
          <a className="nav-link" href="./pages/comienzo.html">Pop/R&B</a>
        </li>
        </Link>
        <Cart /></ul></div>
  </div>
</nav>
  )
}

export default Navbar