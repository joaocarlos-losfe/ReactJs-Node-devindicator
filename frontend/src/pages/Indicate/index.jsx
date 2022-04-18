import "./style.css"

import {AiOutlineLink, AiOutlineUser, AiOutlineTags} from "react-icons/ai"
import { useState } from "react"
import { useFetch } from "../../hooks/HttpRequests"

import {Loading} from "../../components/Loading"
import { Link } from "react-router-dom"

import axios from "axios"

import { useNavigate } from "react-router-dom"

function validUrl(url){
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(url);
}


export const Indicate = ({user_name}) =>{

    const {data, isLoading} = useFetch(`http://localhost:5000/resources/categories`)
    
    const [url, setUrl] = useState("")
    const [originalAutor, setOriginalAutor] = useState("")
    const [tags, setTags] = useState("")
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")

    const [message, setMessage] = useState("")
    const [colorMessage, setColorMessage] = useState("yellow")

    const [descriptionLen, setDescriptionLen] = useState(0)
    const [descriptionText, setDescriptionText] = useState("")

    const handleChangeDescrptionText = (value) => {
        setDescriptionText(value)
        setDescriptionLen(value.length)
    }

    const [sendContentLoading, setSendContentLoading] = useState(false)

    const submitContent = async () => {
        return await axios.post("http://localhost:5000/post/new", {

            "userName": user_name,
            "originalAuthor": originalAutor,
            "category": category,
            "tags": tags,
            "descriptionText": descriptionText,
            "title": title,
            "sourceUrl": url
        }) 


    } 

    const handleSubmitContent = async () =>{

        setColorMessage("yellow")
        setSendContentLoading(true)
    
        if(url == "" || originalAutor == "" || tags == "" || category== "" || title== "" || descriptionText == "")
            setMessage("Alguns campos estão vazios !")
        else if(!validUrl(url))
            setMessage("url invalido !") 
        else{
            
            const response = await submitContent()

            if(response.data.inserted)
                setColorMessage("#BBF247")
            
            setMessage(response.data.message)
        }
        
        setSendContentLoading(false)
            
    }

    return (
        <div className="Indicate"> 
            <h2>Indicação de conteúdo</h2>
            
            <form>
                <div className="Input">
                    <AiOutlineLink className="iconImg"/>
                    <input value={url} onChange={e => setUrl(e.target.value)} type="text" placeholder="Copie e cole a url do conteúdo que deseja indicar*" />
                </div>

                <div className="Input">
                    <AiOutlineUser className="iconImg"/>
                    <input value={originalAutor} onChange={e => setOriginalAutor(e.target.value)} type="text" placeholder="originalAutor/Empresa do conteúdo*" />
                </div>

                {
                    isLoading ? <Loading/> : 
                   <div className="Select">
                    
                    <select value={category} onChange={(e)=>{setCategory(e.target.value)}} >
                    {
                        data.categories.map(item => 
                        {
                            return <option key={item}>{item}</option> 
                        })
                    }
                    </select>
                   </div>
                }

                <div className="Input">
                    <AiOutlineUser className="iconImg"/>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Titulo*" />
                </div>

                <div className="Input">
                    <AiOutlineTags className="iconImg"/>
                    <input value={tags} onChange= {e=> setTags(e.target.value)} type="text" placeholder="Tags* (digite separando-as por virgula)" />
                </div>

                <span>Máximo de caracteres: {descriptionLen} de 250</span>
                <textarea value={descriptionText} onChange= {e => handleChangeDescrptionText(e.target.value)} maxLength={250} placeholder="Descrição*" />
                
                <div className="Buttons">
                    <button onClick={handleSubmitContent} type="button">Submeter</button>
                    <Link className="CancelButton" to="/">Cancelar</Link>
                </div>

                <div style={{marginTop : "10px"}}>
                    {message === "" ? <></> : <span style={{color:colorMessage, textAlign:"center"}} >{message}</span>}
                    {sendContentLoading ? <Loading/> : <></>}
                </div>

            </form>
        </div>
    )
}