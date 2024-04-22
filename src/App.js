import { Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './Components/Wrapper';
import Landingpage from './Pages/Landingpage';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import { useState } from 'react';
import Login from './Pages/Login';

function App() {
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
          </Route>
        </Routes>
    </>
  );
}

export default App;
