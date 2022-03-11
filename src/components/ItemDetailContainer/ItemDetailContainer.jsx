import React from 'react'
import { getFetch } from '../../helpers/getFetch';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    setTimeout(() => getFetch 
    .then((data)=> setItem(data.find((prod)=> prod.id === 0)), 
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
        <ItemDetail {...item}/>
        }
      </div>

    </div>
)}

export default ItemDetailContainer