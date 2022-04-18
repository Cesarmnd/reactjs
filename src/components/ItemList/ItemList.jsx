// Libraries
import { memo } from 'react'
// Components
import Item from '../Item/Item'


const ItemList =  memo(({items}) => {
  // Dibujado de productos de la tienda
  return (
    <div className='card-container'>
        {items.map(item => <Item {...item} key={item.id}/>)}
    </div>
  )
})

export default ItemList