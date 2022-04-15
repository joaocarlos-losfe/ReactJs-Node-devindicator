import style from "./style.css"
import {FaRegUserCircle} from 'react-icons/fa'
import { useEffect, useState } from "react";
import axios from "axios"

import { Loading } from "../../components/Loading";
import { PostCard } from "../../components/PostCard";

export const UserPage = ({_id, userName, email, account_creation_date})=>
{
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true)

    
    useEffect( async ()=>
    {
        setLoading(true)
        const result = await axios.get(`http://localhost:5000/post/get-user-post/${userName}`);
        setData(result.data);
        setLoading(false)
        console.log(data.posts)

    }, [])

    return (
        <div className="UserPage">
            <FaRegUserCircle id="userImg"/>
            <h1 id="title"><span>Olá</span> {userName}</h1>

            <div className="otherInfo">
                <h2>seu email: {email}</h2>
                <h2>conta criada em: {new Date(account_creation_date).toLocaleString('pt-BR')}</h2>
                {isLoading? <Loading/> : <h2>você publicou um total de {data.total_posts} posts</h2>}
            </div>
            
            <div className="Posts">
                <h1>Seus posts</h1>
                <div className="CardsArea">
                {
                    isLoading? <></> : data.posts.map(item=>
                    {
                        return <PostCard
                                category={item.category}
                                datetime={new Date(item.addDate).toLocaleString('pt-BR')}
                                userName={item.userName}
                                originalAuthor={item.originalAuthor}
                                title={item.title}
                                descriptionText={item.descriptionText}
                                sourceUrl={item.sourceUrl}
                                _id={item._id}
                                displayAction={true}
                        />
                    })
                }
                </div>
                
            </div>

        </div>
    )
}