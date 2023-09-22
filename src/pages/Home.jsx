import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Services from '../components/Cards/Services'
import ContactUs from '../components/contactUs/ContactUs'
import Footer from '../components/footer/Footer'
export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <ContactUs/>
        <Footer/>
        </div>
  )
}
