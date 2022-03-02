import './ItemListContainer.css';
import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {
  const onAdd = (cant) => {
    console.log(`You have ${cant} item(s) on your cart.`)
  } 

  return (
    <div className='containerList'>
      <p className='containerList-message'>{greeting}</p>
      <ItemCount limit = {20} initial = {0} onAdd = {onAdd}/>
    </div>
  )
}

export default ItemListContainer