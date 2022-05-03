import "./style.css";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Loading } from "../../components/Loading";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export const EditPost = () =>{

    const {_id} = useParams()

    const [isLoading, setLoading] = useState(true)

    const [originalAutor, setOriginalAutor] = useState("")
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("")
    const [dateTime, setDateTime] = useState("")

    const [isFind, setIsfind] = useState(false)

    const [sendVisibleLoading, setSendVisibleLoading] = useState(false) 
    const [visibleMessage, setVisibleMessage] = useState(false)

    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    function delayAndGo() {
       
        setTimeout(() => navigate("/user-page"), 1000);
    }

    const handleConfirmEdit = async () => {

        setLoading(true)
      
        const result = await axios.put(`http://localhost:5000/post/edit/${_id}`, 
        {
            "title": title,
            "descriptionText": description,
            "originalAuthor": originalAutor,
            "category": category,
            "sourceUrl": url
        })

        setLoading(false);

        setMessage(result.data.message)

        setVisibleMessage(true);

        if(result.data.isEdited)
            delayAndGo()
        
    }
        
    useEffect( async ()=>
    { 
        
        setLoading(true)

        try{
            const response = await axios.get(`http://localhost:5000/post/get-by-id/${_id}`)
            const {data} = response;
            
            if(data)
            {
                const 
                {
                    originalAuthor, 
                    category,
                    title,
                    descriptionText, 
                    sourceUrl,
                    addDate,
                    tags,
                    

                } = data.post[0];

                setOriginalAutor(originalAuthor);
                setCategory(category);
                setTitle(title);
                setDescription(descriptionText);
                setUrl(sourceUrl);
                
                const strdatetime = new Date(addDate).toLocaleString('pt-BR')
                setDateTime(strdatetime)

                setIsfind(true);

                console.log(tags);
                
            }
            
            setLoading(false)
            
        }catch{
            setLoading(false)
        }

    }, [])
    

    return (
        <div className="EditPost">
            {
                isLoading? <Loading/> :
                <>
                {
                    !isFind ? <h2>Post ({_id}) solicitado invalido ou não encontrado</h2> :
            
                    <form>
                        <h1>Edição do post</h1>
                        <div id="EditCardInfo">
                            <span>data da postagem:</span>
                            <h2>{dateTime}</h2>
                        </div>

                        <input disabled ={sendVisibleLoading} value={originalAutor} onChange = {e=>setOriginalAutor(e.target.value)} placeholder="autor original"/>
                        <input disabled ={sendVisibleLoading} value={title} onChange = {e=> setTitle(e.target.value)} placeholder="titulo"/>
                        <textarea disabled ={sendVisibleLoading} value={description} onChange= { e=> setDescription(e.target.value)} placeholder="descrição"/>

                        <div className="ActionButtons">
                            <button onClick={handleConfirmEdit} id="confirmButtom" type="button">Confirmar</button>
                            <Link id="cancelButton" to="/user-page">Cancelar</Link>
                        </div>

                        {
                            sendVisibleLoading ? <Loading/>:
                            visibleMessage ? <h3 style={{marginTop:"15px", textAlign:"center"}}>{message}</h3> : <></>  
                        }

            

                    </form>
                    
                }
                </>
            } 
            
        </div>
    )
}