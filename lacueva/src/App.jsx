import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/cart'
import CartContextProvider from './components/CartContext/CartContext'
import ItemNavContainer from './components/ItemNavContainer/ItemNavContainer'
import Principal from './components/Principal/Principal'
import Checkout from './components/Checkout/Checkout'


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Principal /> } />
          <Route path={'/categoria/:id'} element={<ItemListContainer />} />
          <Route path={'/categoria2/:id'} element={<ItemNavContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/checkout'} element={<Checkout />} />
        </Routes>
        <Categories />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
