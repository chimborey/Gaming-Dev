import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './Page/Home'
import Header from './Page/Header'
import Footer from './Page/Footer'
import About from './Page/About'
import ProductList from './Components/ProductList'
import ProductDetail from './Page/ProductDetail'
import { ToastContainer } from 'react-toastify'
import Contact from './Page/Contact'
import Faq from './Page/Faq'
import Cart from './Page/Cart'
const App = () => {
      // AOS
      useEffect(() => {
            AOS.init({
                  duration: 1000,
                  offset: 100,
                  once: false
            })
      }, [])
      return (
            <BrowserRouter>
            <ToastContainer />
                  <Header />
                  <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/product' element={<ProductList/>}></Route>
                        <Route path='/product/:id' element={<ProductDetail />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/faq' element={<Faq />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                  </Routes>
                  <Footer />
            </BrowserRouter>
      )
}

export default App