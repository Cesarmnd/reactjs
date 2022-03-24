import { Link } from "react-router-dom";

// Creación de botón de Añadir
const AddBtn= ( {change, number} )=> {
  return <button className="btn" onClick={change} disabled={ number === 0 }>Add to cart</button>
}

// Creación de botón para ir al carrito
const CartBtn= ()=> {

  return (
    <Link to='/cart' >
        <button className="btn">Go to Cart</button>
    </Link>
  )
}

// Función de intercambio 
function InterBtn({onAdd, counter, number}) {

  return (
    <div>         
        {counter === 0 ? 
          <AddBtn change={onAdd} number={number} />
          : 
          <CartBtn />}
    </div>
  )
}

export default InterBtn