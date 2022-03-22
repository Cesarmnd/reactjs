import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './cart.css';

function Cart() {
  // Importación del context
  const {cartList, emptyCart} = useCartContext()

  return (
    <div className='cart-main'>
      <div className='cart-main__header'>
        <p className='cart-main__name'>Product</p>
        <p className='cart-main__price'>Price</p>
        <p className='cart-main__quantity'>Quantity</p>
        <p className='cart-main__remove'>Remove</p>
      </div>
      { cartList.map(item => <div className='cart-main__container' key={item.id}> 
                                <div className='cart-main__item'>
                                  <img className='cart-main__img' src={item.img} />
                                  <p className='cart-main__item-name'> {item.name} </p>
                                </div>
                                <p className='cart-main__item-price'> ${item.price} </p>
                                <div className='cart-main__item-quantity'>
                                  <button className='btn-cart'>-</button>
                                  <p className='label'> {item.ammount} </p>
                                  <button className='btn-cart'>+</button>
                                </div>
                                <div className='cart-main__item-remove'>
                                  <button className='btn-cart'>X</button>
                                </div>
                            </div>) }
      <div className='cart-main__btns'>
      <button className='btn' onClick={emptyCart}>Empty Cart</button>
      <Link className='btn' to='/'>
        Continue Shopping
      </Link>
      </div>
    </div>
  )
}

export default Cart