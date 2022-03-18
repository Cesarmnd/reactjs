import './itemDetail.css'
import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'

function ItemDetail ({id, img, name, price, description}) {
  const [counter, setCounter] = useState(0)

  const onAdd = ()=> { 
    setCounter(1)
  }

  // Dibujado de detalle de producto
  return (
    <div className="cardDetail" key={id}>
                            <img src={img} className="imgDetail"/>
                            <div className="bodyDetail">
                              <h5 className="nameDetail">{name}</h5>
                              <p className="descriptionDetail">{description}</p>
                              <div className='btns-container'>
                                <p className="priceDetail">${price}</p>
                                {/* Contador */}
                                <ItemCount limit = {20} initial = {0} onAdd={onAdd} counter={counter} />
                                {/* Botón de regreso */}
                                <Link className="btn" to='/'>
                                  Back
                                </Link>
                              </div>
                            </div>
    </div>
  )}

export default ItemDetail

