import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Wrapper() {


  return (
    <div>
          <Navbar />
          <Outlet />
    </div>
  )
}

export default Wrapper
