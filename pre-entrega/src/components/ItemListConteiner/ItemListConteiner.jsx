import React from 'react'
import "./ItemListConteiner.css"
const ItemListConteiner = ({greeting}) => {
  return (
    <h2 className='saludo'>{greeting}</h2>
  )
}

export default ItemListConteiner