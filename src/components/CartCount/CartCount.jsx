// Libraries
import { useCartContext } from '../../context/CartContext';
// Style
import './cart.css';

function CartCount({ item, number }) {
  // Importación del context
  const { cartList, forcedReRender } = useCartContext()

  const incAmmount = (e) => {
    if (cartList.find(obj => obj.id == e.target.getAttribute('tag')).ammount < cartList.find(obj => obj.id == e.target.getAttribute('tag')).stock) {
      cartList.find(obj => obj.id == e.target.getAttribute('tag')).ammount++
      forcedReRender()
    }

  }

  const decAmmount = (e) => { 
    if (cartList.find(obj => obj.id == e.target.getAttribute('tag')).ammount > 0) {
      cartList.find(obj => obj.id == e.target.getAttribute('tag')).ammount--
      forcedReRender()
    } 
  }
  
  return(
    <div className='cart-main__item-quantity'>
      <button className='btn-cart' onClick={ decAmmount } tag={ item } >-</button>
      <p className='label'> { number } </p>
      <button className='btn-cart' onClick={ incAmmount } tag={ item } >+</button>
    </div>
  )
  
}

export default CartCount

