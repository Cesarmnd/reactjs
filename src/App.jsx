import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {


  return (
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
          <Route path="/cart" element={ <Cart /> } />  

          {/* Redirección a página de inicio */}
          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
        
      </div>
    </BrowserRouter> 
  );
}

export default App;
