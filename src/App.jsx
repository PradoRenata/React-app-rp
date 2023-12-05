import './App.css'
// import { Card } from './components/Card'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/Navbar/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a DinoShop!"}> 
        <p>Aquí van los Productos</p>
      </ItemListContainer>
    </>
  )
}

export default App
