// Libraries
import { useCartContext } from '../../context/CartContext';
// Style
import './cart.css';

function CartCount({ item, number, stock }) {
  // Importación del context
  const { cartList, forcedReRender } = useCartContext()

  const incAmmount = (e) => {
    if (cartList.find(obj => obj.id == e.target.getAttribute('tag')).ammount < cartList.find(obj => obj.id == e.target.getAttribute('tag')).stock) {
      cartList.find(obj => obj.id == e.target.getAttribute('tag')).ammount++
      forcedReRender()
    }
  }

  const decAmmount = (e) => { 
    if (cartList.find(obj => obj.id == e.target.getAttribute('tag')).ammount > 1) {
      cartList.find(obj => obj.id == e.target.getAttribute('tag')).ammount--
      forcedReRender()
    } 
  }
  
  return(
    <div className='cart-main__item-quantity'>
      <button className={number != 1 ? 'btn-cart' : 'btn-cart__disabled'} onClick={ decAmmount } tag={ item } >-</button>
      <p className='label'> { number } </p>
      <button className={number != stock ? 'btn-cart' : 'btn-cart__disabled'} onClick={ incAmmount } tag={ item } >+</button>
    </div>
  )
  
}

export default CartCount

