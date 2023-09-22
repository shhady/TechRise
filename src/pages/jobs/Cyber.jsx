import React,{useEffect} from 'react'
import './styleJobs.css'
export default function Cyber() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{margin: '80px 30px'}}>
         <h1>What is Cybersecurity?</h1>
    
    <p>Cybersecurity is the practice of protecting computer systems, networks, and data from theft, damage, or unauthorized access. It involves a range of technologies, processes, and practices aimed at safeguarding digital assets from cyber threats and vulnerabilities.</p>
    <details style={{marginTop:"15px", borderTop:"1px solid white",borderBottom:"1px solid white", padding:"20px"}}>
    <ul>
        <li><strong>Network Security:</strong> Implementing measures to secure network infrastructure and data transmission.</li>
        <li><strong>Endpoint Security:</strong> Protecting individual devices, such as computers and mobile devices, from malware and intrusion.</li>
        <li><strong>Identity and Access Management (IAM):</strong> Managing user access and authentication to prevent unauthorized entry.</li>
        <li><strong>Incident Response:</strong> Developing strategies and protocols to respond to and mitigate cyber incidents.</li>
        <li><strong>Security Awareness:</strong> Educating users and employees about cybersecurity best practices.</li>
    </ul>

    <p>Cybersecurity is essential in an increasingly digital world to ensure the confidentiality, integrity, and availability of information.</p>

        <summary> <span className='spanOf'>Key Aspects of Cybersecurity</span></summary>
    </details>
   
    
    
    </div>
  )
}
