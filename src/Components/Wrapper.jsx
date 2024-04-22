import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Wrapper({onsearch}) {
  const [enteredsearch, setenteredsearch] = useState(null);

  const handlesearchFilterChange = (searchdata) => {
    setenteredsearch(searchdata);
    onsearch(searchdata)
      console.log("sEARCH",searchdata)
  };
  return (
    <div>
      <Navbar handlesearchFilterChange={handlesearchFilterChange} />
      <Outlet  Searchdata={enteredsearch}/>
    </div>
  )
}

export default Wrapper
