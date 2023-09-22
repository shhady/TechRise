import React,{useEffect} from 'react'
import './styleJobs.css'
export default function Uiux() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{margin: '80px 30px'}}>
        <h1>What is UI/UX ?</h1>
    
    <p>UI/UX, which stands for User Interface and User Experience, are critical aspects of web and application design. They focus on creating interfaces that are not only visually appealing but also intuitive and user-friendly to enhance the overall user experience.</p>
<details style={{marginTop:"15px", borderTop:"1px solid white",borderBottom:"1px solid white", padding:"20px"}}>
<ul>
        <li><strong>User Interface (UI):</strong> UI design deals with the visual elements of a website or app, including layout, colors, typography, and interactive components.</li>
        <li><strong>User Experience (UX):</strong> UX design focuses on the overall feel of the product, ensuring that it is easy to navigate, efficient, and provides value to users.</li>
        <li><strong>Wireframing and Prototyping:</strong> Designers create wireframes (skeletal layouts) and prototypes (interactive models) to plan and test the user interface.</li>
        <li><strong>Usability Testing:</strong> User testing helps identify issues and gather feedback to improve the user experience.</li>
        <li><strong>Responsive Design:</strong> Ensuring that interfaces adapt to various screen sizes and devices for a consistent user experience.</li>
    </ul>

    <p>Effective UI/UX design is crucial for retaining users, increasing engagement, and achieving business goals.</p>

    <summary><span className='spanOf'>Key Elements of UI/UX</span></summary>
</details>
    
    
   
    </div>
  )
}
