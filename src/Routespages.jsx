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


function Routespages() {
    const [handlesearchdata, sethandlesearchdata] = useState();

  
  const handlesearch = (searchdata) => {
    sethandlesearchdata(searchdata);
    console.log("filter",searchdata)
    console.log("Searchdata",handlesearchdata)
};
  return (
    <>
       <Routes>
          <Route path="/" element={<Wrapper onsearch={handlesearch} />}>
            <Route index element={<Landingpage   searchdata={handlesearchdata} />}></Route>
            <Route path="/products" element={<Products searchdata={handlesearchdata} />}></Route>
            <Route path="/ProductDetails/:id" element={<ProductDetails />}></Route>
            <Route path="/login" element={<Login />}></Route>\
            <Route path="/shop" element={<Shop />}></Route>\
            <Route path="/magzine" element={<Magzine />}></Route>\
          </Route>
        </Routes>
    </>
  )
}

export default Routespages
