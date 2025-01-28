import { Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './Components/Wrapper';
import Landingpage from './Pages/Landingpage';
import Products from './Components/Products';
import ProductDetails from './Pages/ProductDetails';
import { useState } from 'react';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Magzine from './Pages/Magzine';
import Buynow from './Pages/Buynow';


function Routespages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Landingpage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/ProductDetails/:id" element={<ProductDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/magzine" element={<Magzine />}></Route>
          <Route path="/buynow" element={<Buynow />}></Route>
        </Route>
      </Routes>


    </>
  )
}

export default Routespages
