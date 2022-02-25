import './ItemListContainer.css';
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='containerList'>
      <p className='containerList-message'>{greeting}</p>
    </div>
  )
}

export default ItemListContainer