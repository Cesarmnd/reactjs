import './ItemListContainer.css';
import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = () => {
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    if ( categoryId != undefined ) {
      const queryFilter = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFilter)
      .then(resp => setProds( resp.docs.map(obj => ( { id: obj.id, ...obj.data() } )) ))
      .catch(err =>console.log(err))
      .finally(()=> setLoading(false))
    }else {
      getDocs(queryCollection)
      .then(resp => setProds( resp.docs.map(obj => ( { id: obj.id, ...obj.data() } )) ))
      .catch(err =>console.log(err))
      .finally(()=> setLoading(false))
    }    
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