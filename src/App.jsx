import "./App.css";
import CartView from "./components/CartView/CartView";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
import { CartProvider } from "./Context/CartContext";
import { UserProvider } from "./Context/UserContext";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/ErrorPages/NotFound";
import Checkout from "./components/Checkout/Checkout";

function App() {
    return (
        <UserProvider>
            <CartProvider>
                <BrowserRouter>
                    <NavBar />

                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<CartView/>} />
                        <Route path="/checkout" element={<Checkout />}/>
                        <Route path="/not-found" element={<NotFound />} />
                        <Route path="*" element={<Navigate to={"/not-found"} />} />
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </UserProvider>
    );
}

export default App;
