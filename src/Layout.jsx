import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {

  const location = useLocation()
  console.log(location)
  return (
    <>
    {
      location === "/payment" ?
      <>
      <Navbar classname={`z-50 top-0`} />
      <Outlet/>
      <Footer/>
      </>
      : <Outlet/>
    }
    </>
  )
}

export default Layout