import React from 'react'
import './about.css'
export default function About() {
  return (
    <div className='about'>
        <div className='aboutContent'>
            <h2 style={{marginBottom:'20px'}}>About</h2>
            <p>
            Welcome to TechRise, where a dynamic team of professionals,
            including full-stack developers, marketing experts, IT specialists, DevOps engineers, AWS architects, and UI/UX designers,
            is passionate about helping your business thrive. Our goal is to empower and elevate your entrepreneurial journey.<br />
            Whether you're launching a startup or seeking growth, we offer tailored solutions to match your unique goals. 
            Our diverse expertise spans innovation, creativity, and cutting-edge technology. We stay ahead of industry trends, 
            ensuring your business benefits
            from the latest advancements. Ready to supercharge your business? Contact us to transform your ideas into reality.
            </p>
        </div>
        <div className='aboutImg'>
         <img src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" width='100%' />
        </div>
    </div>
  )
}
