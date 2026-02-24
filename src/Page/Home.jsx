import React from 'react'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
import ProductList from '../Components/ProductList'
import ContactUs from '../Components/ContactUs'
import FaqUs from '../Components/FaqUs'

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <ProductList />
      <ContactUs />
      <FaqUs />
    </main>
  )
}

export default Home