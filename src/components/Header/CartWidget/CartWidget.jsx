// Libraries
import { useCartContext } from '../../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 	
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' 


function CartWidget () {
  // Importación del context
  const { ItemNumbers } = useCartContext()

  // Dibujado del botón de carrito en navbar
  return (
    <div className='cart-container' title='See your cart'>
      <ItemNumbers />
      <FontAwesomeIcon icon={faShoppingCart} className="cart"></FontAwesomeIcon>
      <p className='cart-name'>Your Cart</p>
    </div>
  )
}

export default CartWidget