import './App.css';
import CheckoutPage from './components/Checkout';
import Navbar from './components/Navbar';
import Product from './components/Products';
import Products from './components/Productss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import Names from './components/api/api';
import AllCakes from './components/api/api';

function App() {
  return (
      <div className="App">
         <Navbar />
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Products />}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/api' element={<AllCakes />}/>
      </Routes>
    </BrowserRouter>
      
      </div>
  );
}

export default App;
