import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div>
      <NavBar /> 
      <ItemListContainer aviso='En los proximos días estaremos abriendo la tienda online, los esperamos!'/>
    </div>
  )
}

export default App
///a Counter le pasamos el valor que seria "initial" 
