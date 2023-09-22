
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Home from "./pages/Home"
import Header from "./components/header/HeaderMenu";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from './pages/services/ServicesPage'
import Contact from "./pages/contactPage/Contact"
import FrontEnd from './pages/jobs/FrontEnd'
import BackEnd from './pages/jobs/BackEnd'
import AWS from './pages/jobs/AWS'
import IT from './pages/jobs/IT'
import Uiux from './pages/jobs/Uiux'
import Devops from './pages/jobs/Devops'
import Cyber from './pages/jobs/Cyber'
import Marketing from './pages/jobs/Marketing'
function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
       <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/About" exact element={<AboutPage />}/>
        <Route path="/Services" exact element={<ServicesPage />}/>
        <Route path="/contactUs" exact element={<Contact />}/>
        <Route path="Services/Front-end" exact element={<FrontEnd />}/>
        <Route path="Services/Back-end" exact element={<BackEnd />}/>
        <Route path="Services/AWS" exact element={<AWS />}/>
        <Route path="Services/IT" exact element={<IT />}/>
        <Route path="Services/UiUx" exact element={<Uiux />}/>
        <Route path="Services/Devops" exact element={<Devops />}/>
        <Route path="Services/Cyber" exact element={<Cyber />}/>
        <Route path="Services/Marketing" exact element={<Marketing />}/>
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
