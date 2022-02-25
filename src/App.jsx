import './App.css';
import Header from './modules/Header/Header';
import ItemListContainer from './modules/ItemListContainer/ItemListContainer';

function App() {


  return (
    <div>
      <Header /> 
      <ItemListContainer greeting="Hi! Thanks for visiting my page. You're amazing!"/>  
    </div>
    
  );
}

export default App;
