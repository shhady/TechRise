
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Home from "./pages/Home"
import Header from "./components/header/HeaderMenu";
import AboutPage from "./pages/about/AboutPage";
function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
       <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/About" exact element={<AboutPage />}/>
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
