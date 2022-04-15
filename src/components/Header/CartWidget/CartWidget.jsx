// Libraries
import { useCartContext } from '../../../context/CartContext';
// Components
import cartIcon from './cart.png'
// Styles
import './cartWidget.css'

function CartWidget () {
  // Importación del context
  const { ItemNumbers } = useCartContext()

  // Dibujado del botón de carrito en navbar
  return (
    <div className='cart-container' title='See your cart'>
      <ItemNumbers />
      <img className='cart' src={ cartIcon } alt='cart'/> 
      <p className='cart-name'>Your Cart</p>
    </div>
  )
}

export default CartWidget