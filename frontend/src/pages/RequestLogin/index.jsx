import "./style.css"

import { Link } from "react-router-dom"
import LogoImg from "../../assets/logo.svg"

export const RequestLogin = () => {
    return (
        <div className="RequestLogin">

            <img src={LogoImg}/>

            <h1>
                Olá, o devindicator proporciona que qualquer usuário possa 
            indicar conteudos para outros usuarios. Mas para isso, é nessario 
            que voçê faça login no sistema caso possua uma conta, ou crie uma caso não tenha uma 😁
              
            </h1>

            <div>
                <h2>não fez login? <Link to="/login" className="Link">Logar</Link> </h2>
                <h2>não possui uma conta? <Link to="/create-account" className="Link">Criar</Link> </h2>
            </div>
            
        </div>
    )
}