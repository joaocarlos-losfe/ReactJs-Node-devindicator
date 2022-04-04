import './mainStyle.css'
import {Navbar} from "./components/Navbar";
import {Posts} from "./pages/Posts";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Indicate} from "./pages/Indicate";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Posts/>}/>
                <Route path="/indicate" element={<Indicate/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
