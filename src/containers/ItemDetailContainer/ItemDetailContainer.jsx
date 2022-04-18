// Libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom' 
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Spinner } from 'react-bootstrap';
// Components
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { detailId } = useParams ()
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'items', detailId)
    getDoc(queryDb)
    .then(resp => setItem({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])

  return (
    <div>
      <div>
        {
        loading ? 
        <div className='loading-container'>
          <Spinner animation="border" role="status" />
          <h1 className='loading'>Loading...</h1>
        </div>
        :
        <ItemDetail item={item}/>
        }
      </div>

    </div>
)}

export default ItemDetailContainer