import './itemDetail.css'
import React from 'react'
import { Link } from 'react-router-dom'


function ItemDetail ({id, img, name, price, description}) {
  return (
    <div className="cardDetail" key={id}>
                            <img src={img} className="imgDetail"/>
                            <div className="bodyDetail">
                              <h5 className="nameDetail">{name}</h5>
                              <p className="descriptionDetail">{description}</p>
                              <div className='btns-container'>
                                <p className="priceDetail">${price}</p>
                                <Link className="btn btn-primary" to='/'>
                                  Back
                                </Link>
                              </div>
                            </div>
      </div>
  )
}

export default ItemDetail

