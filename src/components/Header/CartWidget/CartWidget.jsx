import './cartWidget.css'
import React from 'react'
import cartIcon from './cart.png'
import { useCartContext } from '../../../context/CartContext';

function CartWidget () {
  // Importación del context
  const {ItemNumbers} = useCartContext()

  // Dibujado del botón de carrito en navbar
  return (
    <div className='cart-container' title='See your cart'>
      <ItemNumbers />
      <img className='cart' src={cartIcon} alt='cart' title='cart' /> 
      <p className='cart-name'>Your Cart</p>
    </div>
  )
}

export default CartWidget