import './mainStyle.css'
import { Navbar } from "./components/Navbar";

import { Posts } from "./pages/Posts";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Indicate } from "./pages/Indicate";
import { Login } from './pages/Login';
import { UserPage } from './pages/UserPage';

import { CreateAccount } from './pages/CreateAccount';
import { RequestLogin } from './pages/RequestLogin';
import {FaRegUserCircle} from 'react-icons/fa'

import {Logo} from "./components/Logo";
import { Link } from "react-router-dom";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Footer} from "./components/Footer";
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState(null) 
  
  const userLogin = (user_data) => {
    setUserData(user_data)
  }

  return (
    <div className="App">
        <BrowserRouter>

            <nav>
              <Logo/>
              <ul className="Links">
                  <Link className="link" to="indicate">indicar</Link>
                  <Link className="link" to="contact">contato</Link>
                  <Link className="link" to="about">sobre</Link>
                  {
                    userData? <Link className="UserComponent" to="/user-page"><FaRegUserCircle id='iconUserdata'/> Olá {userData.userName}</Link> : 
                    <Link className="link" to="login"> login</Link> 
                  }
              </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Posts/>}/>
                <Route path="/indicate" element={userData? <Indicate/> : <RequestLogin/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login userLogin={userLogin}/>}/>
                <Route path="/create-account" element={<CreateAccount/>} />
                <Route 
                  path="/user-page" 
                  element={userData? <UserPage _id={userData._id} userName={userData.userName} email={userData.email} account_creation_date={userData.accountCreationDate} /> : <RequestLogin/>  } />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
