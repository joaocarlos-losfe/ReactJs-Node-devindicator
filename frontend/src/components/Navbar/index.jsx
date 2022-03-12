
import { Logo } from "./Logo";
import { Links } from "./NavLinks";
import { SearchBar } from "./SearchBar";

import './style.css';

export function NavBar() {
    return(
        <nav>
            <h2>Navbar</h2>
            <Links/>
            <Logo/>
            <SearchBar/>
        </nav>
    ) 
}