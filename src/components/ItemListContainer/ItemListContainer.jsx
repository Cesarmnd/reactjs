import './ItemListContainer.css';
import React from 'react'
import { getFetch } from '../../helpers/getFetch';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    setTimeout(() => getFetch 
    .then((data)=> setProds(data), 
                    (err)=>console.log(err))
  
    .catch(err =>console.log(err))
    .finally(()=> setLoading(false)),2000)
    
  },[])

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
  )
}

export default ItemListContainer