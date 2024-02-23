import './App.css'
import Navbar from './components/Navbar/Navbar'
import Carrusel from './components/Carrusel/Carrusel'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/cart'
import CartContextProvider from './components/CartContext/CartContext'



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Carrusel />} />
          <Route path={'/categoria/:id'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'/cart'} element={<Cart />} />
        </Routes>
        <Categories />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
