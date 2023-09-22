
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Home from "./pages/Home"
import Header from "./components/header/HeaderMenu";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from './pages/services/ServicesPage'
import Contact from "./pages/contactPage/Contact"
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
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
