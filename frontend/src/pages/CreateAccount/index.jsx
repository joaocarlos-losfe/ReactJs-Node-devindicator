import "./style.css"

import {useNavigate} from "react-router-dom"
import { useState } from "react"

import {Popup} from "../../components/Popup";
import {SimpleMessage} from "../../components/SimpleMessage";
import { Loading } from "../../components/Loading";

const customMessages = {
    title: {
        valid: "Conta criada",
        invalid: "Erro ao criar a conta !"
    },

    description:{
        valid: "Conta criada com sucesso. Proceda a pagina de login para acessar sua conta",
        invalid: "Verifique se todos os campos estão preenchidos ou se são validos !"
    }
}

export const CreateAccount = ()=>{

    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const [isLoading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false);

    const [validAccount, setValidAccount] = useState(true)

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const sendAccount = async (apiUrl) => {

    }

    const handleSubmit = ()=>{

        console.log({userName, email, pass}) // validar conta antes
        togglePopup()
        setValidAccount(true)
        setLoading(false)

    }

    return(
        <div className="CreateAccount">
            <form>
                <h1>Criar conta</h1>

                <input value={userName} onChange={e => setUserName(e.target.value)} type="text" placeholder="Nome de usuário"/>
                <input value={email} onChange={e => setEmail(e.target.value)}  type="email" placeholder="Seu email"/>
                <input value={pass} onChange={e => setPass(e.target.value)}  type="password" placeholder="Sua senha"/>

                <div>
                    <button onClick={handleSubmit} type="button">Criar</button>
                    <button onClick={()=>{navigate("/")}} id="cancelButton" type="button">Cancelar</button>
                </div>

            </form>

            {isOpen && <Popup
                content={isLoading? <Loading/> :
                    <SimpleMessage title={validAccount? customMessages.title.valid :
                        customMessages.title.invalid}
                    description={validAccount? customMessages.description.valid:
                        customMessages.description.invalid}
                /> }
                bColor = {validAccount ? "#BBF247" : "yellow"}
                handleClose={togglePopup}
            />}

        </div>
    )
}