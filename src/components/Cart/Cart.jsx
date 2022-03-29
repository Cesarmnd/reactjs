import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './cart.css';

function Cart() {
  // Importación del context
  const {cartList, emptyCart, deleteItem, totales} = useCartContext()
  const checkout = () =>{
    const list = {
      buyer: {
        name: 'Cesar',
        phone: 984371650,
        email: 'cesarn.davila@gmail.com'
      },
      items: cartList.map(obj => ({ id: obj.id, 
                                    name: obj.name, 
                                    price: obj.price })),
      total: totales 
    }
    console.log(list)
  }

  if (cartList.length === 0) {
    return (
      <div className='empty-container'>
        <h2 className='empty-title'>You doesn't have any item yet! :(</h2>
        <Link className='btn' to='/'>
          Go back to store
        </Link>
      </div>
    )
  }

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
                                <div className='cart-main__item-quantity'>
                                  <button className='btn-cart'>-</button>
                                  <p className='label'> {item.ammount} </p>
                                  <button className='btn-cart'>+</button>
                                </div>
                                <div className='cart-main__item-remove'>
                                  <button className='btn-cart' onClick={deleteItem} id={item.id}>X</button>
                                </div>
                            </div>) }
      <div className='cart-main__btns'>
      <button className='btn' onClick={emptyCart}>Empty Cart</button>
      <button className="btn" onClick={checkout}>Checkout</button>
      <p >Total: ${totales}</p>
      <Link className='btn' to='/'>
        Continue Shopping
      </Link>
      </div>
    </div>
  )
}

export default Cart

