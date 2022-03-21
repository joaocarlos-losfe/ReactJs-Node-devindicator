import { NavBar } from "./components/Navbar";
import { Posts } from "./pages/Posts";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { About } from "./pages/About";
import { IndicateContent } from "./pages/IndicateContent";
import { Contact } from "./pages/Contact";

function App() {

  return (
    <div className="App">    
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Posts/>}/>
          <Route path="/indicate" element={<IndicateContent/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
