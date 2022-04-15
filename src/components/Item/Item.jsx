// Libraries
import { Link } from 'react-router-dom'
// Style
import './item.css'

function Item({ id, img, name, price }) {

  // Dibujado de contenedores de objetos
  return (
    <div className="card" key={id}>
                            <img src={ img } className="img"/>
                            <div className="body">
                              <h5 className="name">{ name }</h5>
                              <p className="price">${ price }</p>
                              {/* Botón para ir a descripción de objeto */}
                              <Link className='btn' to={`/detail/${id}`}>
                                Description
                              </Link>
                            </div>
    </div>
  )
}

export default Item

