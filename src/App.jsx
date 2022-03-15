import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {


  return (
    <BrowserRouter>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
          <Route path="/detail/:detailId" element={ <ItemDetailContainer /> } />    
          <Route path="/category/:categoryId/detail/:detailId" element={ <ItemDetailContainer /> } />    

          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
        
      </div>
    </BrowserRouter> 
  );
}

export default App;
