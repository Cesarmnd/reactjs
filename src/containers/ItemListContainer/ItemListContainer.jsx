// Libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
// Componets
import ItemList from '../../components/ItemList/ItemList';
// Style
import './ItemListContainer.css';


const ItemListContainer = () => {
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    const queryFilter = categoryId ? 
                        query(queryCollection, where('category', '==', categoryId))
                        : 
                        queryCollection
      
      getDocs(queryFilter)
      .then(resp => setProds( resp.docs.map(obj => ( { id: obj.id, ...obj.data() } )) ))
      .catch(err =>console.log(err))
      .finally(()=> setLoading(false))

  },[categoryId])

  return (
    <div>
      <div>
        {
        loading ? <h1 className='loading'>Loading...</h1>
        :
        <ItemList items={prods}/>
        }
      </div>

    </div>
)}

export default ItemListContainer