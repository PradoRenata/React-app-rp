import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />

        <Route path="/not-found" element={ <h2>Not found</h2> }/>
        <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App
