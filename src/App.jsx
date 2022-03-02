import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <div>
      <Header /> 
      <ItemListContainer greeting="Hi! Thanks for visiting my page. You're amazing!"/>   
    </div>
    
  );
}

export default App;
