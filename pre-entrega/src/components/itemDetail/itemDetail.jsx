import './ItemDetail.css'
import ItemCount from '../itemcount/itemcount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarProducto} = useContext(CarritoContext);
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio}; 
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p> Todos nuestros discos se encuentran sellados y en perfecto estado. Realizamos envios a todo el paìs</p>
      <img src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<Link className='btn btn-success' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      
      }
      <Link to="/" className='btn btn-primary'>Seguir comprando </Link>
    </div>
  )
}

export default ItemDetail