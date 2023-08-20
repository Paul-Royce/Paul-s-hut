import React from 'react'
import Header from "../Header"
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'

const Layout = () => {
  return (
    <> 
       <Header />
       <Navigation />
       <Outlet />
       <Footer />
    </>
  )
}

export default Layout