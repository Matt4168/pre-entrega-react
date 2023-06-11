
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="listado">
        <div className='cardProducto'>
      <div className="card">
      <img src= {img} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h5 className="card-title">ID:{id}</h5>
        <p className="card-text">${precio}</p>
        
      </div>
    </div >
        <Link className='btn btn-primary' to={`/item/${id}`}> Ver Detalles</Link>
    </div>
    </div>

  )
}

export default Item