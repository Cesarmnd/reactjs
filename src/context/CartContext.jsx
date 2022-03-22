import { useState, createContext, useContext } from 'react';


// Creación del context 
const CartContext = createContext([])

// Función de exportacion del context
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {

  const [ cartList, setCartList ] = useState([])


  const addCart = (item) => {
    if (cartList.hasOwnProperty(item.id)) {
      cartList[item.id].ammount = cartList[item.id].ammount + item.ammount
    }else {
      setCartList( [ ...cartList, item ] ) // con esto seteo lo que tengo en cart list más el nuevo item 
    }
  } 

  const emptyCart = ()=> [
      setCartList([])
  ]


  return (
    <CartContext.Provider value={{ 
      cartList,
      addCart,
      emptyCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider