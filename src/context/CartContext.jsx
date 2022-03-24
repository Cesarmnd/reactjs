import { useState, createContext, useContext } from 'react';


// Creación del context 
const CartContext = createContext([])

// Función de exportacion del context
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {

  const [ cartList, setCartList ] = useState([])

  // Función para añadir items al carrito
  const addCart = (item) => {
    if (!cartList.some(o => o.id === item.id)) {
      setCartList([ ...cartList, item ])
    } else {
      cartList[item.id].ammount = cartList[item.id].ammount + item.ammount
    }
    
  } 
  
  console.log(cartList)
  //  Vaciar carrito
  const emptyCart = ()=> [
      setCartList([])
  ]

  // Eliminar item del carrito
  const deleteItem = (e) => {
    const newCartList = cartList.filter((item)=> item.id != e.target.id)
    setCartList(newCartList)
  }


  // Cáculo del total 
  const prices = cartList.map(getPrice)

  function getPrice (element) {
    return (element.price * element.ammount)
  }

  const totales = prices.reduce(grandTotal,0)

  function grandTotal(total,num) {
    return total + num
  }
  
  // Número de items en el carrito

  const quantities = cartList.map(getQuantity)

  function getQuantity (obj) {
    return (obj.ammount)
  }

  const totalQuantity = quantities.reduce(grandTotal, 0) 
  
  function grandTotal (tot, numb){
    return tot + numb
  }


  // Función de dibujado de cantidad
  function ItemNumbers () {
      
    const config = (totalQuantity === 0)
      ?
        {
          className: `btn`,
          style: {display: 'none'},
        }
      : 
        {
          className: `btn`,
          style: {color: 'inline-block'},
        }

      return (
            <p {...config}>{totalQuantity}</p>
      )
    }

  return (
    <CartContext.Provider value={{ 
      cartList,
      addCart,
      emptyCart,
      deleteItem,
      ItemNumbers,
      totales
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider












