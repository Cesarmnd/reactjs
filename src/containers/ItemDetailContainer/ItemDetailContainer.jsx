import React from 'react'
import { getFetch } from '../../helpers/getFetch';
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const { detailId } = useParams ()
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => getFetch 
    .then((data)=> setItem(data.find((prod)=> prod.id === detailId)), 
                    (err) => console.log(err))
  
    .catch(err => console.log(err))
    .finally(()=> setLoading(false)),500)
    
  },[])

  return (
    <div>
      <div>
        {
        loading ? <h1 className='loading'>Loading...</h1>
        :
        <ItemDetail item={item}/>
        }
      </div>

    </div>
)}

export default ItemDetailContainer