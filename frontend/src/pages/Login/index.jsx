import "./style.css"

import { Link } from "react-router-dom"

export const Login = ()=>{

    

    return(
        <div className="Login">
            <form>
                <h1>Login</h1>

                <input type="email" placeholder="Seu email"/>
                <input type="password" placeholder="Sua senha"/>

                <button type="button">Entrar</button>

                <h2>Não possui uma conta? <Link to="/create-account" className="Link">Criar</Link> </h2>
                <h2>Esqueceu seu login? <Link to="/" className="Link">Recuperar</Link> </h2>

            </form>
        </div>
    )
}