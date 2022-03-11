import './itemDetail.css'
import React from 'react'

function ItemDetail ({id, img, name, price, description}) {
  return (
    <div className="cardDetail" key={id}>
                            <img src={img} className="imgDetail"/>
                            <div className="bodyDetail">
                              <h5 className="nameDetail">{name}</h5>
                              <p className="descriptionDetail">{description}</p>
                              <p className="priceDetail">${price}</p>
                              <a href="#" className="btn btn-primary">Description</a>
                            </div>
      </div>

  )
}

export default ItemDetail

