import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing />}/>
        <Route path='/product/:productId' element={<ProductDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
