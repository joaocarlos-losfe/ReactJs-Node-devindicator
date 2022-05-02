import "./style.css"

import axios from "axios"
import { useState } from "react"
import { Loading } from "../../components/Loading"
import { Link, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export const PasswordReset = () => {

    const {_id} = useParams()
    
    const [currentPass, setCurrentPass] = useState("")
    const [confirmCurrentPass, setconfirmCurrentPass] = useState("")

    const [message, setMessage] = useState("")

    const [loading, setLoading]= useState(false)

    const navigate = useNavigate()


    function delayAndGo() {
        setTimeout(() => navigate("/login"), 1000);
    }
    
    const handleUpdatePass = async () =>{

        if(currentPass != confirmCurrentPass)
            setMessage("Senhas não coincidem ⚠️")
        else if(currentPass == "" || confirmCurrentPass == "")
        {
            setMessage("Campos estão em branco ⚠️")
            
        }
        else
        {
            setLoading(true)
            const {data} = await axios.put(`http://localhost:5000/user/recovery/updatePass/${_id}`, {currentPass})

            console.log(data)

            setMessage(data.message)

            if(data.isUpdated)
                delayAndGo()


            setLoading(false)
        }
        
    }

    return(
        <div className="PasswordReset">

                <form className="RecoveryAccountForm">
                    <h1 style={{marginBottom: "5px"}} >Alteração de senha</h1>
                    <h3>insira nos campos abaixo sua nova senha </h3>
                    <input type="password" value={currentPass} onChange = {e=>setCurrentPass(e.target.value)} placeholder="Nova senha"/>
                    <input type="password" value={confirmCurrentPass} onChange = {e=>setconfirmCurrentPass(e.target.value)} placeholder="Confirme a senha novamente"/>
                    <button type="button" onClick={handleUpdatePass}>Confirmar</button>

                    {loading? <Loading/>:<></> }

                    {message=="" ? <></> : <span>{message}</span>}
                    
                </form>

        </div>
    )
}