// Libraries
import { useState, createContext, useContext } from 'react';


// Creación del context 
const CartContext = createContext([])


// Función de exportacion del context
export const useCartContext = () => useContext(CartContext)

// CartContext Provider
function CartContextProvider ({children}) {

  const [ cartList, setCartList ] = useState([])

  // Re-renderizado forzado
  const [ reRender, setReRender] = useState(0)

  const forcedReRender = () => {
    setReRender(reRender+1)
  }

  // Añadir al carrito
  const addCart = (item) => {
    const foundItem = cartList.find(obj => obj.id == item.id)
    const itemIndex = cartList.findIndex(obj => obj.id === item.id)
 
    if (foundItem === undefined) {
      setCartList([ ...cartList, item ])
    } else {
      cartList[itemIndex].ammount = cartList[itemIndex].ammount + item.ammount
      forcedReRender()
    }
  } 

  //  Vaciar carrito
  const emptyCart = () => {
    setCartList([])
    setReRender(0)
  }
  
  // Eliminar item del carrito
  const deleteItem = (e) => {
    const newCartList = cartList.filter((item)=> item.id != e.target.id)
    setCartList(newCartList)
  }

  // Total del carrito
  const prices = cartList.map(getPrice)

  function getPrice (element) {
    return (element.price * element.ammount)
  }

  const totals = prices.reduce(grandTotal,0)

  function grandTotal(total,num) {
    return total + num
  }
  
  // Cantidad del carrito
  function ItemNumbers () {
    const quantities = cartList.map((obj) => {
      return (obj.ammount)
    })

    const totalQuantity = quantities.reduce( (tot, numb) => {
      return tot + numb
    }, 0) 
      
    const config = (totalQuantity === 0)
      ?
        {
          style: {display: 'none'},
        }
      : 
        {
          className: `items-number`,
          style: {color: 'inline-block'},
        }

      return (
            <p {...config}>{totalQuantity}</p>
      )
    }

  return (
    <CartContext.Provider value={{ 
      cartList,
      forcedReRender,
      addCart,
      emptyCart,
      deleteItem,
      ItemNumbers,
      totals
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider












