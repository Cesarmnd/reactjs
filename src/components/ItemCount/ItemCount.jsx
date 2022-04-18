// Libraries
import { useState } from 'react'
// Component
import InterBtn from '../InterBtn/InterBtn';

function ItemCount( {initial, onAdd, counter, stock} ) {
  const [ count, setCount ] = useState(initial);
  const [ newStock, setNewStock] = useState(localStorage.getItem('numb'))

  // Establezco el stock de item
  localStorage.setItem('numb',stock)

  // Aumentar la cantidad
  const incCount = () => { 
    if (count <  (newStock) ) {
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
    setCount(0)
    localStorage.setItem('numb', (stock - count))
    setNewStock(stock - count)
  } 

  // Dibujado del contador
  return (
    <div className='btn-container'>
      <div>
        <button className={count != 0 ? 'btn-cart' : 'btn-cart__disabled'} onClick={ decCount }>-</button>
        <label className='label'> { count } </label>
        <button className={count != newStock ? 'btn-cart' : 'btn-cart__disabled'} onClick={ incCount }>+</button>
      </div>
      {/* Dibujado del botón intercambiable */}
      <InterBtn onAdd={ add } counter={ counter } number={ count } />
    </div>
  )
}

export default ItemCount 
