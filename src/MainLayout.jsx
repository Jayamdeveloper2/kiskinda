import React from 'react'
import TopBar from './components/TopBar/TopBar'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
