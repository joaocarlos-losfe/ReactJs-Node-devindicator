import "./style.css"

import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import {Loading} from "../../components/Loading";

export const Login = () =>{

    
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [validUser, setValidUser] = useState(true)
    const [message, setMessage] = useState("")

    const handleSubmitLogin = async () => {

        if(email != "" && pass != "")
        {
            setLoading(true)
            const result = await axios.get(`http://localhost:5000/user/${email}/${pass}`)
            setLoading(false)

            if(!result.data.isFind)
            {
                setMessage(result.data.message)
                setValidUser(false)
                return
            }
            else{
                
                const {_id, userName, email, accountCreationDate} = result.data.user

                console.table({_id, userName, email, accountCreationDate})

            }
            
        }
    
    }

    return(
        <div className="Login">
            <form>
                <h1>Login</h1>
                {isLoading ? <Loading/> : <></>}
                {validUser? <></> : <span style={{color:"yellow", marginBottom: "20px"}}>{message}</span> }
                <input value={email} onChange = {e => setEmail(e.target.value)} type="email" placeholder="Seu email"/>
                <input value={pass} type="password" onChange = {e => setPass(e.target.value)}  placeholder="Sua senha"/>

                <button type="button" onClick={handleSubmitLogin}>Entrar</button>

                <h2>Não possui uma conta? <Link to="/create-account" className="Link">Criar</Link> </h2>
                <h2>Esqueceu seu login? <Link to="/" className="Link">Recuperar</Link> </h2>

            </form>


        </div>
    )
}