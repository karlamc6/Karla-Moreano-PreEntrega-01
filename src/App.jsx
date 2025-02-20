import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Counter from './components/Counter'
import { BrowserRouter, Routes, Route } from "react-router"
import DetalleItemContainer from './components/DetalleItemContainer'



function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<DetalleItemContainer />} />
        <Route path="*" element={<div>La pagina a la que intentas ingresar no existe.</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
///a Counter le pasamos el valor que seria "initial" 
