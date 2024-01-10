import './App.css'
import Carrusel from './components/Carrusel.jsx'
import Categories from './components/Categories.jsx'
import Footer from './components/Footer.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Navbar from './components/Navbar.jsx'


function App() {
  return (
    <>
      <Navbar />
      <Carrusel />
      <ItemListContainer msj={"No tenemos productos por el momento, vuelva en la segunda entrega"}/>
      <Categories/>
      <Footer/>
    </>
  )
}

export default App
