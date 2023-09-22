import React ,{useEffect}from 'react'
import './services.css'
import { Link } from 'react-router-dom';
export default function Cards() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='services'>
        <h2 style={{margin:'20px'}}>Services</h2>
    <div className='CardsContainer'>
    <Link className='linkRouterDom' to="/Services/Front-End"><div className='card'>
            <h3>Front-End</h3>
            <p>User interface development for websites and applications.</p>
            </div></Link>
        <Link className='linkRouterDom' to="/Services/Back-End"><div className='card'>
            <h3>Back-End</h3>
            <p>Server-side logic and database management for web applications.</p>
        </div></Link>
        <Link className='linkRouterDom' to="/Services/IT"><div className='card'>
            <h3>IT</h3>
            <p>Information technology, managing and maintaining computer systems.</p>
            </div></Link>
        <Link className='linkRouterDom' to="/Services/AWS"><div className='card'>
            <h3>AWS</h3>
             <p>Amazon Web Services, cloud computing and hosting solutions.</p>
            </div></Link>
        <Link className='linkRouterDom' to="/Services/DevOps"><div className='card'>
            <h3>DevOps</h3>
             <p>Development and IT operations collaboration for efficient software delivery.</p>
            </div></Link>
        <Link className='linkRouterDom' to="/Services/Cyber"><div className='card'>
            <h3>Cyber</h3>
             <p>Cybersecurity, protecting digital systems from threats and breaches.</p>
            </div></Link>
        <Link className='linkRouterDom' to="/Services/UiUx"><div className='card'>
            <h3>UI/UX</h3>
             <p>User Interface and User Experience design for intuitive interactions.</p>
            </div></Link>
        <Link className='linkRouterDom' to="/Services/Marketing"><div className='card'>
            <h3>Marketing</h3>
             <p>Promoting products or services to reach and engage customers.</p>
            </div></Link>
            </div>
    </div>
   
  )
}
