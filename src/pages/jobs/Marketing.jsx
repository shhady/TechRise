import React,{useEffect} from 'react'
import './styleJobs.css'
export default function Marketing() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{margin: '80px 30px'}}>
         <h1>What is Marketing?</h1>
    
    <p>Marketing is the process of promoting and selling products or services to a target audience. It involves various strategies and activities aimed at creating brand awareness, attracting potential customers, and ultimately driving sales and revenue.</p>
    <details style={{marginTop:"15px", borderTop:"1px solid white",borderBottom:"1px solid white", padding:"20px"}}>
    <ul>
        <li><strong>Market Research:</strong> Understanding customer needs, preferences, and market trends is crucial for effective marketing.</li>
        <li><strong>Advertising:</strong> Promoting products or services through various channels, such as digital ads, print media, and social media.</li>
        <li><strong>Content Marketing:</strong> Creating valuable content, such as blog posts and videos, to engage and inform the target audience.</li>
        <li><strong>Social Media Marketing:</strong> Utilizing social platforms to connect with customers, build brand loyalty, and reach a wider audience.</li>
        <li><strong>Email Marketing:</strong> Sending targeted emails to nurture leads and maintain customer relationships.</li>
    </ul>

    <p>Effective marketing strategies help businesses grow their customer base and achieve their goals.</p>

        <summary><span className='spanOf'>Key Elements of Marketing</span></summary>
    </details>
    
    
    
    </div>
  )
}
