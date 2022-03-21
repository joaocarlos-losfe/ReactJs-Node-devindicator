import { Logo } from '../Logo';
import { NavLinks } from './NavLinks';
import { SearchBar } from './SearchBar';
import './style.css';

export  function NavBar() {

    return(        
        <div className='NavBar'>
            <Logo/>
            <SearchBar/>
            <NavLinks/>
        </div>
    ) 
}