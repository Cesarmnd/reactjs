import './itemList.css'
import React from 'react' 
import Item from '../Item/Item'

function ItemList({items}) {

  
  return (
    <div className='card-container'>
        {items.map(item => <Item {...item} key={item.id}/>)}
    </div>
    
  )
}

export default ItemList