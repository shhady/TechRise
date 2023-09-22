import React from 'react'
import "./Hero.css"
import ScrollAnimation from '../scroll/ScrollAnimation'
export default function Hero() {
  return (
    <div className='heroContainer'>
        <div className='heroContent'>
        <div>
        <h1>Supercharge Your Business</h1>
        <p className='heroP'>"Elevate your business with our team of full-stack developers, marketing experts, IT specialists, DevOps engineers, AWS architects, and UI/UX designers."</p>
        </div>
        <ScrollAnimation/>
        </div>
    </div>
  )
}
