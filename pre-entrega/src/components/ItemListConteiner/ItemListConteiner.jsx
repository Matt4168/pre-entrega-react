import { useState, useEffect } from 'react'
import ItemList from '../itemList/itemList'
import { useParams } from 'react-router-dom'
import {db} from '../../config/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
  const [items, setitems] = useState([]);
  const {idCategoria} = useParams();

  useEffect( ()=> {
    const misitems = idCategoria ? query(collection(db, "items"), where("idCat", "==", idCategoria)) : collection(db, "items");

    getDocs(misitems)
      .then(res => {
        const nuevositems = res.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setitems(nuevositems);
      })
      .catch(error => console.log(error))
  },[idCategoria])

  return (
    <>
      <h2 style={{textAlign: "center"}}> Nuestros Productos </h2>
      <ItemList items={items} />
    </>
  )
}

export default ItemListContainer