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
import { EditPost } from './pages/EditPost';


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


import {FiMenu} from "react-icons/fi"

import {AiOutlineClose} from "react-icons/ai"
import { ErrorPage } from './pages/ErrorPage';
import { RecoveryAccount } from './pages/RecoveryAccount';
import { PasswordReset } from './pages/PasswordReset';


function App() {

  const [userData, setUserData] = useState(null) 
  
  const userLogin = (user_data) => {
    setUserData(user_data)
  }


  function Mudarestado() {
    let el = 'Links';
    let display = document.getElementsByClassName(el)[0].style.display;
    if(display == "none"){
      document.getElementsByClassName(el)[0].style.display = 'block';
      document.getElementsByClassName('IconFechar')[0].style.display = 'block';
      document.getElementsByClassName('IconAparecer')[0].style.display = 'none';
    } else {
      document.getElementsByClassName(el)[0].style.display = 'none';
      document.getElementsByClassName('IconFechar')[0].style.display = 'none';
      document.getElementsByClassName('IconAparecer')[0].style.display = 'block';
        
    }
  }

  function verificaTamanho(){
    if (document.body.clientWidth < 900) {
      //executar o código aqui dentro
      /* document.getElementsByClassName('Links')[0].style.display = 'none'; */
      console.log('Passou aqui')
      return 'none'
    }
  }

  return (
    <div className="App">
        <BrowserRouter>

            <nav>
              <Logo/>

              <div className="MenuLateral" onClick={Mudarestado}>
                <FiMenu className='IconAparecer' style={{display:'block'}} />
                <AiOutlineClose className='IconFechar' style={{display:'none'}} />
              </div>
              
              <div className="Links" style={{display:verificaTamanho()}}>
                <ul>
                    <Link className="link" to="/">home</Link>
                    <Link className="link" to="indicate">indicar</Link>
                    <Link className="link" to="contact">contato</Link>
                    <Link className="link" to="about">sobre</Link>
                    {
                      userData? <Link className="UserComponent" to="/user-page"><FaRegUserCircle id='iconUserdata'/> Olá {userData.userName}</Link> : 
                      <Link id='loginLink' className="link" to="login">login</Link> 
                    }
                </ul>
              </div>
                
            </nav>

            <Routes>
              <Route path="*" element = {<ErrorPage/>} />
              <Route path="/" element={<Posts/>}/>
              <Route path="/indicate" element={userData? <Indicate user_name={userData.userName} /> : <RequestLogin/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/login" element={<Login userLogin={userLogin}/>}/>
              <Route path="/create-account" element={<CreateAccount/>} />
              <Route path="/edit-post/:_id" element={<EditPost/>} /> 
              <Route path="/recovery-account" element={<RecoveryAccount/>}/>
              <Route path="/user-page" element={userData? <UserPage _id={userData._id} userName={userData.userName} email={userData.email} account_creation_date={userData.accountCreationDate} /> : <RequestLogin/>  } />        
              <Route path="/recovery-pass/:_id" element={ <PasswordReset/> }/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
