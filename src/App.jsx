import './App.css';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <div>
      <Header /> 
      <ItemListContainer />   
      <ItemDetailContainer />   
    </div>
    
  );
}

export default App;
