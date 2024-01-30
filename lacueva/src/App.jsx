import './App.css'
import Navbar from './components/Navbar/Navbar'
import Carrusel from './components/Carrusel/Carrusel'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Carrusel />} />
        <Route path={'/categoria/:id'} element={<ItemListContainer />} />
        <Route path={'/item/:id'} element={<ItemDetailContainer />} />
      </Routes>
      <Categories />
      <Footer />
    </BrowserRouter>
  )
}

export default App
