import React from 'react'
import './contactUs.css'
import Social from '../socialMedia/Social'
export default function ContactUs() {
  return (
    <div>
        <div className='formContainer'>
        <div className='rightSideForm'>

        </div>
        <div className='leftSideForm'>
        
            <Social />
            <h3 style={{margin:"15px"}}>Send us a Message</h3>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text"  placeholder='Name'/>
                <label htmlFor="">Email</label>
                <input type="text"  placeholder='Email'/>
                <label htmlFor="" >Phone</label>
                <input type="text" placeholder='Phone'/>
                <label htmlFor="" >Message</label>
                <textarea type="text" placeholder='Write your message'/>
                <input type="submit" />
            </form>
           
        </div>
       
       
        </div>
    </div>
  )
}
