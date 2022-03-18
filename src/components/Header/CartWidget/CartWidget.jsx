import './cartWidget.css'
import React from 'react'
import cartIcon from './cart.png'

function CartWidget () {
  // Dibujado del botón de carrito en navbar
  return (
    <div className='cart-container' title='See your cart'>
      <img className='cart' src={cartIcon} alt='cart' title='cart' /> 
      <p className='cart-name'>Your Cart</p>
    </div>
  )
}

export default CartWidget