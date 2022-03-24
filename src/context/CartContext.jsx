import { useState, createContext, useContext } from 'react';


// Creación del context 
const CartContext = createContext([])

// Función de exportacion del context
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {

  const [ cartList, setCartList ] = useState([])

  // Creación de re-renderizado forzado
  const [ reRender, setReRender] = useState(0)

  // Función para añadir items al carrito
  const addCart = (item) => {
    if (!cartList.some(o => o.id === item.id)) {
      setCartList([ ...cartList, item ])
    } else {
      item.ammount = item.ammount + item.ammount
      setReRender(reRender+1)
    }
  } 

  
  //  Vaciar carrito
  const emptyCart = ()=> {
    setCartList([])
    setReRender(0)
  }
  

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
  

  // Función de dibujado de cantidad
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












