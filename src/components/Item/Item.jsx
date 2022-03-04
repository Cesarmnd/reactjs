import './item.css'
import React from 'react'

function Item({id, img, name, price}) {
  return (
    <div className="card" key={id}>
                            <img src={img} className="img"/>
                            <div className="body">
                              <h5 className="name">{name}</h5>
                              <p className="price">${price}</p>
                              <a href="#" className="btn btn-primary">Description</a>
                            </div>
      </div>

  )
}

export default Item

