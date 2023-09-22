import React,{useEffect} from 'react'
import './styleJobs.css'
export default function Devops() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{margin: '80px 30px'}}>
        <h1>What is DevOps (Development and Operations)?</h1>
    
    <p>DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to streamline and automate the software development lifecycle. It aims to shorten the system development process, improve software quality, and increase collaboration between development and operations teams.</p>
    <details style={{marginTop:"15px", borderTop:"1px solid white",borderBottom:"1px solid white", padding:"20px"}}>
    <ul>
        <li><strong>Continuous Integration (CI):</strong> Developers integrate code into a shared repository frequently, which is automatically tested for issues.</li>
        <li><strong>Continuous Delivery (CD):</strong> Code is automatically built, tested, and deployed to production environments when changes are made.</li>
        <li><strong>Automation:</strong> Tasks like testing, deployment, and infrastructure provisioning are automated to reduce manual efforts.</li>
        <li><strong>Collaboration:</strong> Development and operations teams work closely to achieve common goals and resolve issues efficiently.</li>
        <li><strong>Monitoring and Feedback:</strong> Continuous monitoring provides feedback on system performance and helps identify and address issues promptly.</li>
    </ul>

    <p>DevOps practices enable organizations to deliver software faster, with higher quality, and increased reliability.</p>

        <summary> <span className='spanOf'>Key Aspects of DevOps</span></summary>
    </details>
   
    
   
    </div>
  )
}
