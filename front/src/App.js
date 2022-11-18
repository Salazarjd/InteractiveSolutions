import './App.css';
import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import { Home } from './components/Home';
import { Games } from './components/Games';

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
import { Profile } from './components/user/Profile';
import { UpdateProfile } from './components/user/UpdateProfile';
import { UpdatePassword } from './components/user/UpdatePassword';
import store from './store';
import { loadUser } from './actions/userActions';


function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

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
          <Route path="/yo" element={<Profile />} />
          <Route path="/yo/update" element={<UpdateProfile />} />
          <Route path="/password/update" element={<UpdatePassword />} />
        </Routes>
      </div>
      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
