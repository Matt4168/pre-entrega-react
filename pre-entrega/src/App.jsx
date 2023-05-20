
import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailContainer from './components/itemDetailConteiner/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListConteiner/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListConteiner/> }/>
          <Route path='/item/:idItem' element = { <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>

    </>
  );
  }
export default App
