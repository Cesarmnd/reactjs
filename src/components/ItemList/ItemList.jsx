import './itemList.css'
import React from 'react' 
import Item from '../Item/Item'
import { memo } from 'react'


const ItemList =  memo(({items}) => {
  // Dibujado de productos de la tienda
  return (
    <div className='card-container'>
        {items.map(item => <Item {...item} key={item.id}/>)}
    </div>
  )
})

export default ItemList