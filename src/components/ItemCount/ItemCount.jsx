import './itemCount.css'
import React from 'react'
import { useState } from 'react'

function ItemCount( {initial, limit, onAdd} ) {
  const [ count, setCount ] = useState(initial);

  const incCount = () => { 
    if (count <  limit ) {
      setCount( count + 1 )
    } else {
      setCount(count) 
    }

  }

  const decCount = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(count)
    }
  }

  return (
    <div className='btn-container'>
      <div>
        <button className='btn-cart' onClick={ decCount }>-</button>
        <label className='label' > { count } </label>
        <button className='btn-cart' onClick={ incCount }>+</button>
      </div>
      <button className='btn-add' onClick={ () => {onAdd(count) }}>Add to cart</button>
    </div>
  )
}

export default ItemCount