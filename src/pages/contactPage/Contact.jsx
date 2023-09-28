import React from 'react'
import '../../components/contactUs/contactUs.css'
export default function ContactUs() {
  return (
    <div  >
        {/* <h1>Contact Us</h1> */}
        <div className='formContainer' style={{height:'90vh'}}>
        <div className='rightSideForm'>

        </div>
        <div className='leftSideForm'>
        
          
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
