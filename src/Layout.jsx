import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar classname={`z-50 top-0`} />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout