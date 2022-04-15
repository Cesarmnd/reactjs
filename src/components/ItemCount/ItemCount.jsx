// Libraries
import { useState } from 'react'
// Component
import InterBtn from '../InterBtn/InterBtn';
//Style
import './ItemCount.css'

function ItemCount( {initial, onAdd, counter, stock} ) {
  const [ count, setCount ] = useState(initial);

  // Aumentar la cantidad
  const incCount = () => { 
    if (count <  stock ) {
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

  // Agregado de cantidad al item
  const add = () => {
    onAdd(count)
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
      <InterBtn onAdd={ add } counter={ counter } number={ count } />
    </div>
  )
}

export default ItemCount 
