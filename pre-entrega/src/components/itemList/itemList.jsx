
import Item from "../item/item"

const ItemList = ({items}) => {
  return (
    <div className="contenedorProductos">
        {items.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList