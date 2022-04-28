import "./style.css"

import {useNavigate} from "react-router-dom"
import { useState } from "react"

import {Popup} from "../../components/Popup";
import {SimpleMessage} from "../../components/SimpleMessage";

import { Loading } from "../../components/Loading";
import axios from "axios";


export const CreateAccount = ()=>{

    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const [isLoading, setLoading] = useState(false)
    
    const [validData, setvalidData] = useState(true)
    const [message, setMessage] = useState("")

    let temp_pass = pass

    const handlePassword = (value) => {
        temp_pass = value
        setPass(temp_pass)
        
        if(temp_pass.length < 4)
        {
            setvalidData(false)
            setMessage(`Senha muito curta. defina uma senha com no minimo 4 caracteres`)
        }
        else
            setvalidData(true)
    }

    const sendNewUser = async () =>{

        const response = await axios.post("http://localhost:5000/user/new", {
            "userName": userName, 
            "email": email, 
            "password": pass
        })

        return response
    }

    const handleSubmit = async ()=>{

        console.log({userName, email, pass}) // validar conta antes

        setvalidData(true)
        setLoading(true)

        if(userName.length < 4)
        {
            setMessage("Usuário invalido")
            setvalidData(false)
        }
        else if(email.length < 6)
        {
            setMessage("Email invalido")
            setvalidData(false)
        }
        else if(pass.length < 4)
        {
            setMessage(`Senha muito curta. defina uma senha com no minimo 4 caracteres`)
            setvalidData(false)
        }
        else{

            const resp = await sendNewUser()

            if(!resp.data.inserted)
            {
                setMessage("Erro ao criar a conta. Usuário já existente. Verifique o nome de usuário ou email")
                setvalidData(false)
            }
            else{
                setMessage("Conta criada com sucesso")
                setvalidData(true)
                navigate("/login")
            }
        }

        setLoading(false)

    }

    return(
        <div className="CreateAccount">
            <form>
                <h1>Criar conta</h1>

                {validData? <></> :<span style={{color:"red", marginBottom: "20px", textAlign: "center", fontSize: "0.9rem", fontWeight: "bold"}}>{message}</span> }
                
                {isLoading? <Loading/>: <></> }

                <input value={userName} onChange={e => setUserName(e.target.value)} type="text" placeholder="Nome de usuário"/>
                <input value={email} onChange={e => setEmail(e.target.value)}  type="email" placeholder="Seu email"/>
                <input value={pass} onChange={e => handlePassword(e.target.value)}  type="password" placeholder="Sua senha"/>

                <div>
                    <button onClick={handleSubmit} type="button">Criar</button>
                    <button onClick={()=>{navigate("/")}} id="cancelButton" type="button">Cancelar</button>
                </div>

            </form>

        </div>
    )
}