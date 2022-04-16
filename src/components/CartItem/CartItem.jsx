import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartCount from '../CartCount/CartCount';

function CartItem() {
  const { cartList, emptyCart, deleteItem, totals } = useCartContext()

  if (cartList.length === 0) {
    return (
      <div className='empty-container'>
        <h2 className='empty-title'>You don't have any item yet! :(</h2>
        <Link className='btn' to='/'>
          Go back to store
        </Link>
      </div>
    )
  } else {
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
                                  <p className='cart-main__item-price'> ${(item.price * item.ammount)} </p>
                                  <CartCount item={ item.id } number={ item.ammount } stock={ item.stock }/>
                                  <div className='cart-main__item-remove'>
                                    <button className='btn-cart' onClick={deleteItem} id={item.id}>X</button>
                                  </div>
                              </div>) }
        <div className='cart-main__btns'>
        <button className='btn' onClick={emptyCart}>Empty Cart</button>
        <Link className='btn' to='/checkout'>
          Checkout
        </Link>
        <p >Total: ${totals}</p>
        <Link className='btn' to='/'>
          Continue Shopping
        </Link>
        </div>
      </div>
    )
  }

}

export default CartItem