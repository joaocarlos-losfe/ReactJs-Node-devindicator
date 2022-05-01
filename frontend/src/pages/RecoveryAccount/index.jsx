import axios from "axios"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { Loading } from "../../components/Loading"
import "./style.css"

const sucessMailSendPage = () => {

    return(
        <div className="sucessMailSendPage">
            <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1626355319613x484158047569452200%2FGmail_Small_Business.gif?w=&h=&auto=compress&dpr=1&fit=max"/>
            <h1>Email enviado com sucesso</h1>
            <h2>Cheque sua caixa de entrada ou de span e clique no link fornecido para continuar no processo de recuperação </h2>
        </div>
    )

}

export const RecoveryAccount = () => {

    const [currentPage, setCurrentPage] = useState("RecoveryAccount")

    const [email, setEmail] = useState("")

    const [loading, setLoading]= useState(false)

    const [message, setMessage] = useState("")

    const handleSendMail = async () =>{
        setLoading(true)
        const response = await axios.get(`http://localhost:5000/user/${email}`)

        if(response.data.isFind)
            setCurrentPage("SucessMailSendPage")
        else
        {
            setMessage(response.data.message)
        }

        console.log(response)

        setLoading(false)

    }

    return(
        <>
            {
            currentPage === "SucessMailSendPage" ? sucessMailSendPage(): 

            <div className="GlobalRecoveryAccount">

                <form className="RecoveryAccountForm">
                    <h1>Recuperação da conta</h1>
                    <h2>Esqueceu sua senha ?</h2>
                    <h3>insira seu email cadastrado anteriormente para prosseguir </h3>
                    <input value={email} onChange = {e=>setEmail(e.target.value)} placeholder="email"/>
                    <button type="button" onClick={handleSendMail} >Próximo</button>
                    {loading? <Loading/> : <></>}
                    {
                        message === "" ? <></> : <span style={{color: "red", fontWeight: "bold", fontSize: "0.8rem"}}>{message}</span>
                    }

                </form>

            </div>

            }

        </>
    )
}