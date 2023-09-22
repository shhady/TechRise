import React,{useEffect} from 'react'
import './styleJobs.css'
export default function BackEnd() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{margin: '80px 30px'}}>
         <h1>What is Backend?</h1>
    
    <p>Backend development refers to the behind-the-scenes work that powers a website or web application.<br/> While frontend development focuses on what users see and interact with, backend development is responsible for the server-side processes and data management that make the frontend work.</p>
    <details style={{marginTop:"15px", borderTop:"1px solid white",borderBottom:"1px solid white", padding:"20px"}}>

    <p>Backend development encompasses several essential aspects:</p>

<ol>
    <li><strong>Server Management:</strong> Backend developers handle server configuration, maintenance, and optimization to ensure that websites and applications run smoothly.</li>
    <li><strong>Database Management:</strong> Backend developers design and maintain databases, store and retrieve data, and ensure data security and integrity.</li>
    <li><strong>API Development:</strong> Backend developers create Application Programming Interfaces (APIs) that allow frontend and other applications to communicate with the server and access data and functionality.</li>
    <li><strong>Security:</strong> Backend developers implement security measures to protect data, user authentication, and prevent unauthorized access and cyber threats.</li>
    <li><strong>Business Logic:</strong> Backend developers define and implement the core functionality and business logic of a web application, ensuring it operates as intended.</li>
</ol>

<p>Backend development often involves using server-side programming languages such as Python, Ruby, PHP, or Node.js and working with databases like MySQL, PostgreSQL, or MongoDB.</p>

<summary><span className='spanOf'>Key Aspects of Backend Development</span></summary>
    </details>
    
    
    <details style={{marginTop:"15px", borderTop:"1px solid white",borderBottom:"1px solid white", padding:"20px"}}>
<p>Backend and frontend development are closely intertwined in web development projects. Frontend developers create the user interface (UI) and user experience (UX), while backend developers build the infrastructure that supports these interfaces.</p>

    <p>Together, frontend and backend developers collaborate to create fully functional websites and web applications, ensuring that data is retrieved, processed, and presented to users efficiently and securely.</p>

    <p>In summary, backend development is the backbone of web applications, handling the server-side processes that make websites and apps functional and responsive to user requests.</p>

        <summary><span className='spanOf'>Collaboration with Frontend</span></summary>
    </details>
    
    
    
 </div>
  )
}
