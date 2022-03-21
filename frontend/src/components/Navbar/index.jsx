import { Logo } from '../Logo';
import { NavLinks } from '../NavLinks';
import './style.css';

export  function NavBar() {

    return(        
        <div className='NavBar'>
            <Logo/>
            <NavLinks/>
        </div>
    ) 
}