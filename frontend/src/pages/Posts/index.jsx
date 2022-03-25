import { settings } from "../../configs/settings"
import { Card } from "../../components/Card"
import { Loading } from "../../components/Loading"
import "./style.css"

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useEffect, useState } from "react"
import { SearchBar } from "../../components/SearchBar"
import axios from "axios"

export function Posts()
{
    const [swapPage, setSwapPage] = useState(1); let pageNumber = swapPage;
    const [data, setPost] = useState(null);
    const [isLoading, setLoading] = useState(true)
    
    function loadPosts()
    {
        setLoading(true);
        axios.get(`${settings.localhost}/post/${pageNumber}`).then((response) => 
        {
            setPost(response.data);
        }).finally(()=> setLoading(false));
    }

    function searchPosts(searchValue, filterValue)
    {
        setLoading(true);
        axios.get(`${settings.localhost}/post/search/${filterValue}/${searchValue}`).then((response) => 
        {
            console.log('procurando ...');
            console.log(response.data);
            setPost(response.data);
        }).finally(()=> setLoading(false));
    }

    useEffect(() => loadPosts(), []);

    function decrementPage()
    {
        if(swapPage > 1)
        {
            setSwapPage(swapPage - 1);
            pageNumber = swapPage - 1;
            loadPosts();
        }
    }

    function incrementPage()
    {
        if(swapPage != data.totalpages)
        {
            setSwapPage(swapPage + 1)
            pageNumber = swapPage + 1
            loadPosts();
        }
    }

    const handleSubmit = ({searchValue, filterValue}) =>
    {
        if(searchValue != "")
            filterValue == "todos" ? searchPosts(searchValue, "all") : searchPosts(searchValue, filterValue);
        else
            loadPosts();   
    }

    return(
        <div className="Posts">
            <div className="SearchArea">
                <SearchBar 
                onSubmit={handleSubmit}
                />
                </div>
            {
                isLoading ? <Loading/> :
                <>
                    <h2>Sugeridos</h2>
                    <div className="Cards">
                        {
                            data.posts.map((item) =>
                            {
                                return <Card id={item.__id} 
                                        category={item.category}
                                        post_date={item.post_date}
                                        username={item.username}
                                        title={item.title}
                                        description={item.description}
                                        source_url={item.source_url}
                                        />
                            })
                        }
                    </div>
                    
                    {
                        !data.totalpages ? <></> : 

                        <div className="swapPages">
                            <FaChevronLeft className="btn" id="incrementPagerement" onClick={decrementPage} />
                            <h3>{`página ${swapPage} de ${data.totalpages}`}</h3>
                            <FaChevronRight className="btn" id="decrementPagerement" onClick={incrementPage}/>
                        </div>
                    }

                   
                    
                </>
            }
        </div>
    )
} 