import './mainStyle.css'
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/Posts";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Indicate } from "./pages/Indicate";
import { Login } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';
import { RequestLogin } from './pages/RequestLogin';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Footer} from "./components/Footer";

function App() {

  const isLogged = false
  
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Posts/>}/>
                <Route path="/indicate" element={isLogged? <Indicate/> : <RequestLogin/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/create-account" element={<CreateAccount/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
