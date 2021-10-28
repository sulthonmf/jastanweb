import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import News from '../components/News'
import Announcement from '../components/Announcement'
import Product from '../components/Product'
import Profile from '../components/Profile'

function index() {
  return (
    <div>
      <Hero/>
      <Profile/>
      <Product/>
      <News/>
      <Announcement/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default index
