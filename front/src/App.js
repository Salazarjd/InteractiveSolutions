import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Home } from './components/Home';
import { Games } from './components/Games';

// import { ProductDetails } from './components/products/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import GameDetails from './components/GameDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        {/* <div className='container container-fluid'> */}
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/' element={<Home />} />
            {/* <Route path='/producto/:id' element={<ProductDetails />} /> */}
            <Route path='/games' element={<Games />}/>
            <Route path='/game/:id' element={<GameDetails />} />
          </Routes>
        </div>
        <Footer/>
      {/* </div> */}
    </Router>
  );
}

export default App;
