import React from 'react'
import "./Cart.css"

function cart() {
    const imgCarrito = "../src/assets/images/carrito.png"
  return (
    <div className='carrito'>
        <img src={imgCarrito} alt="Carrito" width="60px" height="60px"/>
        <p className='contador'>10</p>
    </div>
    
  )
}

export default cart