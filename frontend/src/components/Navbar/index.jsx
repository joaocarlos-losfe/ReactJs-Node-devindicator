import  "./style.css"
import {Logo} from "../Logo";
import {Links} from "../Links";

export const Navbar = ({username, _id}) => {
    return (
        <nav>
            <Logo/>
            <Links/>
        </nav>
    )
}
