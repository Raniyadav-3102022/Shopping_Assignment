import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import FilterState from '../Context/FilterState'
import SearchDataState from '../Context/SearchDataState'

function Wrapper() {


  return (
    <div>
        <FilterState >
          <Navbar />
          <Outlet />
        </FilterState>
    </div>
  )
}

export default Wrapper
