import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import ReturnBtn from '../ReturnBtn/ReturnBtn'

function ItemDetail ({item}) {
  // Inclusión de la función addCArt 
  const { addCart} = useCartContext()

  // Cambio de botón y agregado de items al cart
  const [counter, setCounter] = useState(0)

  const onAdd = cant=> { 
    setCounter(cant)
    addCart({...item, ammount: cant})
  }


  // Dibujado de detalle de producto
  return (
    <div className="cardDetail" key={item.id}>
                            <img src={item.img} className="imgDetail"/>
                            <div className="bodyDetail">
                              <h5 className="nameDetail">{item.name}</h5>
                              <p className="descriptionDetail">{item.description}</p>
                              <div className='btns-container'>
                                <p className="priceDetail">${item.price}</p>
                                {/* Contador */}
                                <ItemCount initial = {0} onAdd={onAdd} counter={counter} stock={item.stock} />
                                {/* Botón de regreso */}
                                <ReturnBtn />
                              </div>
                            </div>
    </div>
  )}

export default ItemDetail

