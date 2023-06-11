import { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/itemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../config/config';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setitem] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "items", idItem);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoitem = { id: res.id, ...data }
                setitem(nuevoitem);
            })
            .catch(error => console.log(error))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...item} />
        </div>
    )
}

export default ItemDetailContainer