import "./style.css"

import {AiOutlineLink, AiOutlineUser, AiOutlineTags} from "react-icons/ai"
import { useState } from "react"
import { useFetch } from "../../hooks/HttpRequests"

import {Loading} from "../../components/Loading"

export const Indicate = () =>{

    const {data, isLoading} = useFetch(`http://localhost:5000/resources/categories`)
    

    const [url, setUrl] = useState("")
    const [autor, setAutor] = useState("")
    const [tags, setTags] = useState("")
    const [category, setCategory] = useState("")

    const [descriptionLen, setDescriptionLen] = useState(0)
    const [descriptionText, setDescriptionText] = useState("")

    const handleChangeDescrptionText = (value) => {
        setDescriptionText(value)
        setDescriptionLen(value.length)
    }

    console.log(data)

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
                    <input value={autor} onChange={e => setAutor(e.target.value)} type="text" placeholder="Autor/Empresa do conteúdo*" />
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
                    <AiOutlineTags className="iconImg"/>
                    <input value={tags} onChange= {e=> setTags(e.target.value)} type="text" placeholder="Tags* (digite separando-as por virgula)" />
                </div>

                <span>Máximo de caracteres: {descriptionLen} de 250</span>
                <textarea value={descriptionText} onChange= {e => handleChangeDescrptionText(e.target.value)} maxLength={250} placeholder="Descrição*" />
                
            </form>
        </div>
    )
}