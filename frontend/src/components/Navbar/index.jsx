
import { Logo } from "./Logo";
import { Links } from "./NavLinks";
import { SearchBar } from "./SearchBar";

export function NavBar() {
    return(
        <div>
            <nav>
                <h2>Eu sou o COMPONENTE de Navegação | </h2>
                <Logo/>
                <SearchBar/>
                <Links/>
            </nav>
        </div>
    ) 
}