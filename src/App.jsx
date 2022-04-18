// Libraries 
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import Header from './components/Header/Header';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import CartContextProvider from './context/CartContext';
//Style
import './App.css';
import CartContainer from './containers/CartContainer/CartContainer';

function App() {

  return (
    <CartContextProvider> 
      <BrowserRouter>
        <div>
          <Header /> 
          <Routes>
            {/* Pagina de inicio */}
            <Route path="/" element={ <ItemListContainer /> } />
            {/* Categorías */}
            <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
            {/* Detalle de producto */}
            <Route path="/detail/:detailId" element={ <ItemDetailContainer /> } />    
            {/* Carrito */}
            <Route path="/cart" element={ <CartContainer /> } />  
            <Route path="/checkout" element={ <CheckoutForm /> } /> 

            {/* Redirección a página de inicio */}
            <Route path='/*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
      </BrowserRouter> 
    </CartContextProvider>
  );
}

export default App;
