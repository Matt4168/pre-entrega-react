import React from 'react'
import Cart from '../cart/cart'
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
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./index.html">VynilManiac</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./pages/listado.html">Tienda</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./pages/comienzo.html">Como Empezar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./pages/cuidado.html">Cuidados</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./pages/contacto.html">Contacto</a>
        </li>
        <Cart /></ul></div>
  </div>
</nav>
  )
}

export default Navbar