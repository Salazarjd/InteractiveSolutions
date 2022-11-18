import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Home } from './components/Home';
import { Games } from './components/Games';
import ProtectedRoute from './routes/ProtectedRoute';

// import { ProductDetails } from './components/products/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import GameDetails from './components/GameDetails';
import Cart from './components/Cart';
import Dashboard, { MenuAdm } from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import NewGame from './components/admin/NewGame';
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';
import { UpdateProduct } from './components/admin/UpdateProduct';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <div className='container container-fluid'> */}
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/producto/:id' element={<ProductDetails />} /> */}
          <Route path='/games' element={<Games />} />
          <Route path='/game/:id' element={<GameDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path='/nuevoJuego' element={<NewGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


           {/*Ruta protegida*/}

           <Route path="/updateGame/:id"
            element={<ProtectedRoute isAdmin={true}><UpdateProduct /></ProtectedRoute>} />

        </Routes>
      </div>
      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
