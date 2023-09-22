import React,{useEffect} from 'react'
import './styleJobs.css'
export default function AWS() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{margin: '80px 30px'}}>
          <h1>What is AWS (Amazon Web Services)?</h1>
    
    <p>AWS, or Amazon Web Services, is a comprehensive and widely-used cloud computing platform offered by Amazon. It provides a vast array of cloud services, including computing power, storage, databases, machine learning, analytics, and more, over the internet.</p>
    <details style={{marginTop:"15px", borderTop:"1px solid white",borderBottom:"1px solid white", padding:"20px"}}>
    <ul>
        <li><strong>Scalability:</strong> AWS allows businesses to scale their resources up or down based on demand, helping them avoid over-provisioning and reduce costs.</li>
        <li><strong>Security:</strong> AWS offers robust security features and compliance certifications to ensure data protection and privacy.</li>
        <li><strong>Elasticity:</strong> Users can quickly and easily adjust their computing resources to match workload requirements.</li>
        <li><strong>Flexibility:</strong> AWS supports a wide range of programming languages, operating systems, and frameworks, making it versatile for various applications.</li>
        <li><strong>Cost-Effective:</strong> AWS offers a pay-as-you-go pricing model, eliminating the need for upfront infrastructure investments.</li>
    </ul>

    <p>Businesses across the globe leverage AWS to build, deploy, and manage applications with flexibility and scalability.</p>

        <summary><span className='spanOf'>Key Features of AWS</span></summary>
    </details>
    
    
   
    </div>
  )
}
