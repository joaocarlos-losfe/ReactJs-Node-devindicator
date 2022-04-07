import './style.css'
import {UserMenu} from "../UserMenu";

import { Link } from "react-router-dom";

export const Links = () => {
    const isLoged = false

    return (
        <ul className="Links">
            <Link className="link" to="indicate">indicar</Link>
            <Link className="link" to="contact">contato</Link>
            <Link className="link" to="about">sobre</Link>
            <UserMenu/>
        </ul>
    )
}