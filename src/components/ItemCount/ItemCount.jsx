import './ItemCount.css'
import React from 'react'
import { useState } from 'react'
import InterBtn from '../InterBtn/InterBtn';

function ItemCount( {initial, limit, onAdd, counter} ) {
  const [ count, setCount ] = useState(initial);

// Aumentar la cantidad
  const incCount = () => { 
    if (count <  limit ) {
      setCount( count + 1 )
    } else {
      setCount(count) 
    }
  }

// Disminuir la cantidad
  const decCount = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(count)
    }
  }

  // Dibujado del contador
  return (
    <div className='btn-container'>
      <div>
        <button className='btn-cart' onClick={ decCount }>-</button>
        <label className='label' > { count } </label>
        <button className='btn-cart' onClick={ incCount }>+</button>
      </div>
      {/* Dibujado del botón intercambiable */}
      <InterBtn onAdd={onAdd} counter={counter} number={count} />
    </div>
  )
}

export default ItemCount 
