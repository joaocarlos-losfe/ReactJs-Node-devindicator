
import { Logo } from "./Logo";
import { Links } from "./NavLinks";
import { SearchBar } from "./SearchBar";

export function NavBar() {
    return(
        
        <nav>
            <h2>Navbar</h2>
            <Logo/>
            <SearchBar/>
            <Links/>
        </nav>
        
    ) 
}