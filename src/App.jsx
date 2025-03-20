import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import { BrowserRouter, Routes, Route } from "react-router"
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'



function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<CartContainer />} />
        <Route path="*" element={<div>La pagina a la que intentas ingresar no existe.</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

