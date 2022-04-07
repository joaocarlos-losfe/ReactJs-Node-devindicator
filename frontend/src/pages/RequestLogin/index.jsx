import "./style.css"

import { Link } from "react-router-dom"

export const RequestLogin = () => {
    return (
        <div className="RequestLogin">
            <h1>
                Olá, com o devindicator proporciona que qualquer usário possa 
            indicar conteudos para outros usuarios. Mas para isso, é nessario 
            que voçê faça login no sistema caso possua uma conta ou crie uma. 
            Basta clicar no botão de logar ou criar uma conta 😁  
            </h1>

            <h2>não fez login? <Link to="/login" className="Link">Logar</Link> </h2>
            <h2>Não possui uma conta? <Link to="/create-account" className="Link">Criar</Link> </h2>
            
        </div>
    )
}