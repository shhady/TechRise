import React from 'react'
import './servicesPage.css'
import { Link } from 'react-router-dom'
export default function Cards() {
  return (
    <div className='services'>
        <div  style={{ padding:"15px 10px"}}>
        <span   style={{fontSize:"26px", fontWeight:"bold"}}>Services</span>
        </div>
    <div className='CardsContainer'>
        <Link className='linkRouterDom' to="Front-End"><div className='card'>
            <h3>Front-End</h3>
            <p>User interface development for websites and applications.</p>
            </div></Link>
        <Link className='linkRouterDom' to="Back-End"><div className='card'>
            <h3>Back-End</h3>
            <p>Server-side logic and database management for web applications.</p>
        </div></Link>
        <Link className='linkRouterDom' to="IT"><div className='card'>
            <h3>IT</h3>
            <p>Information technology, managing and maintaining computer systems.</p>
            </div></Link>
        <Link className='linkRouterDom' to="AWS"><div className='card'>
            <h3>AWS</h3>
             <p>Amazon Web Services, cloud computing and hosting solutions.</p>
            </div></Link>
        <Link className='linkRouterDom' to="DevOps"><div className='card'>
            <h3>DevOps</h3>
             <p>Development and IT operations collaboration for efficient software delivery.</p>
            </div></Link>
        <Link className='linkRouterDom' to="Cyber"><div className='card'>
            <h3>Cyber</h3>
             <p>Cybersecurity, protecting digital systems from threats and breaches.</p>
            </div></Link>
        <Link className='linkRouterDom' to="UiUx"><div className='card'>
            <h3>UI/UX</h3>
             <p>User Interface and User Experience design for intuitive interactions.</p>
            </div></Link>
        <Link className='linkRouterDom' to="Marketing"><div className='card'>
            <h3>Marketing</h3>
             <p>Promoting products or services to reach and engage customers.</p>
            </div></Link>
    </div>
    </div>
  )
}
