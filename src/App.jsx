import { useState, useEffect  } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './scenes/home/Home.jsx';
import './App.css'
import React from 'react'
import ItemDetail from './scenes/itemDetail/ItemDetail.jsx';
import Checkout from './scenes/checkout/Checkout.jsx';
import Confirmation from './scenes/checkout/Confirmation.jsx';
import Navbar from './scenes/global/Navbar.jsx';
import CartMenu from './scenes/global/CartMenu.jsx';
import Footer from './scenes/global/Footer.jsx';
import About from './scenes/home/About.jsx';
import Search from './scenes/global/Search.jsx';



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect (() => {
    window.scrollTo(0,0);
  }, [pathname])

  return null;
}





function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='item/:itemId' element={<ItemDetail/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='checkout/success' element={<Confirmation/>} />
          <Route path='about' element={<About/>} />
          <Route path='search' element={<Search/>} />
        </Routes>
        <CartMenu/>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
