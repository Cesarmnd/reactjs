import './ItemListContainer.css';
import React from 'react'
import { getFetch } from '../../helpers/getFetch';
import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(()=>{
    if ( categoryId != undefined ) {
      setTimeout(() => getFetch 
      .then((data)=> setProds(data.filter(val => val.category === categoryId)), 
                      (err)=>console.log(err))
    
      .catch(err =>console.log(err))
      .finally(()=> setLoading(false)),500)
    }else {
      setTimeout(() => getFetch 
      .then((data)=> setProds(data), 
                      (err)=>console.log(err))
    
      .catch(err =>console.log(err))
      .finally(()=> setLoading(false)),500)
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