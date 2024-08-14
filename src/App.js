import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import electronic_banner from './components/Assets/banner_electronics.jpg'
import Login from './Pages/Login';
import Register from './Pages/Register';
import OrderConfirmation from './Pages/OrderConfirmation';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="Men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="Women"/>}/>
        <Route path='/electronics' element={<ShopCategory banner={electronic_banner} category="Electronics"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/order-confirmation" element={<OrderConfirmation/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
