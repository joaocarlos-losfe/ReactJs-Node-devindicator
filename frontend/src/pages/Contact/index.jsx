import "./style.css"

import {Link} from "react-router-dom"
import {useState} from "react";

import {Popup} from "../../components/Popup";
import {SimpleMessage} from "../../components/SimpleMessage";
import axios from "axios";
import {Loading} from "../../components/Loading";

const customMessages = {
    title: {
        valid: "Enviado",
        invalid: "Erro ao enviar"
    },

    description:{
        valid: "Sua mensagem foi enviada com sucesso. Em breve ela sera respondida !",
        invalid: "Verifique se todos os campos estão preenchidos"
    }
}

export const Contact = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [validContact, setIsValidContact] = useState(false)

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [isLoading, setLoading] = useState(true)

    const sendMessage = async (apiUrl) =>
    {
        setLoading(true)
        await axios.post(apiUrl, {"fullname": name, "email": email, "message": message});
        setLoading(false)
    }

    const handleSendMensage = async ()=>{

        togglePopup()

        if(name === "")
        {
            setLoading(false)
            setIsValidContact(false)
        }
        else
        {
            await sendMessage("http://localhost:5000/contact/new")
            setIsValidContact(true)
        }

    }

    return (
        <div className="Contact">
            <form>
                <h1>Entre em contato</h1>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Seu nome*"/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email*"/>
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} id="messageText" type="text" placeholder="Mensagem*"/>

                <div className="Buttons">
                    <button onClick={handleSendMensage} type="button">Enviar</button>
                    <Link className="CancelButton" to="/">Cancelar</Link>
                </div>

            </form>

            {isOpen && <Popup
                content={isLoading? <Loading/> :
                    <SimpleMessage title={validContact? customMessages.title.valid :
                        customMessages.title.invalid}
                    description={validContact? customMessages.description.valid:
                        customMessages.description.invalid}
                /> }
                bColor = {validContact ? "#cf5508" : "white"}
                handleClose={togglePopup}
            />}

        </div>
    )
}