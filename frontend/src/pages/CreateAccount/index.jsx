import "./style.css"

import {useNavigate} from "react-router-dom"

export const CreateAccount = ()=>{

    const navigate = useNavigate()

    return(
        <div className="CreateAccount">
            <form>
                <h1>Criar conta</h1>

                <input type="text" placeholder="Nome de usuário"/>
                <input type="email" placeholder="Seu email"/>
                <input type="password" placeholder="Sua senha"/>

                <div>
                    <button type="button">Criar</button>
                    <button onClick={()=>{navigate("/")}} id="cancelButton" type="button">Cancelar</button>
                </div>

            </form>
        </div>
    )
}