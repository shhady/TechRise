import React,{useEffect} from 'react'
import './styleJobs.css'
export default function FrontEnd() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{marginTop: '80px 30px', padding:"10px"}}>
         <h1>What is Frontend?</h1>
    <p>Frontend development refers to the process of creating the visible and interactive elements that users encounter when they visit a website. It encompasses both the aesthetics (the look) and the user experience (the feel) of a website.</p>
    <details style={{marginTop:"15px", borderTop:"1px solid white",borderBottom:"1px solid white", padding:"20px"}}>
    <p>Frontend development consists of two main components:</p>

    <ol>
    <li><strong>Graphic Design (Look):</strong> This aspect focuses on the visual design of a website. It includes designing layouts, choosing colors, creating images and graphics, and ensuring that the overall appearance is visually appealing.</li>
    <li><strong>User Interface (UI) Development (Feel):</strong> UI development involves the technical implementation of the user interface elements. It requires writing code using web technologies such as HTML, CSS, and JavaScript to ensure that users can interact with the website seamlessly.</li>
    </ol>

    <p>Frontend development is typically a collaborative effort involving professionals like frontend developers, who write the code for website functionality, and UI/UX designers, who work on the visual aspects and user experience. The development process often includes creating wireframes (skeletal outlines of the user interface), prototypes (working models of the website), and conducting user testing to ensure that the final product meets user expectations.</p>

    <p>In essence, frontend development is about crafting the user-facing part of a website to provide an engaging and user-friendly experience.</p>

        <summary><span className='spanOf'>Components of Frontend Development</span></summary>
    </details>
         
     </div>
  )
}
