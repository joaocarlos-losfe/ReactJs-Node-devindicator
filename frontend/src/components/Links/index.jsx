import './style.css'

import { Link } from "react-router-dom";

export const Links = ({username, _id}) => {
    const isLoged = false

    return (
        <ul className="Links">
            <Link className="link" to="indicate">indicar</Link>
            <Link className="link" to="contact">contato</Link>
            <Link className="link" to="about">sobre</Link>
            {isLoged ? <div> <Link className="link" to="login">{username}</Link> </div> : <Link className="link" to="login">login</Link>}

        </ul>
    )
}