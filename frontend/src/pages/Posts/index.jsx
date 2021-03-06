import "./style.css"
import {useState, useEffect} from "react";
import {PostCard} from "../../components/PostCard";
import {useFetch} from "../../hooks/HttpRequests";
import {Loading} from "../../components/Loading";
import {SeachBar} from "../../components/SeachBar";

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import axios from "axios";

export const Posts = ()=>{


    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true)
    const [postsTitle, setPostsTitle] = useState("Sugestões")
    const [category, setCategory] = useState('nenhum')
    
    const [currentPage, setCurrentPage] = useState(1)

    const [isSearching, setIsSeaching] = useState(false)


    const getPages = async (apiUrl) =>
    {
        setLoading(true)
        const result = await axios.get(apiUrl);
        setData(result.data);
        setLoading(false)
    }

    const incrementPageCount = () => {

        if (currentPage < data.numberOfPages)
        {
            setCurrentPage(currentPage+1)
            getPages(`http://localhost:5000/post/${currentPage + 1}`);
        }
    }

    const decrementPageCount = () => {

        if (currentPage > 1 )
        {
            setCurrentPage(currentPage - 1)
            getPages(`http://localhost:5000/post/${currentPage - 1}`);            
        }

    }

    const handleStartSearch = ({category, query}) =>
    {
        setIsSeaching(true)
        setPostsTitle("resultados da pesquisa")
        getPages(`http://localhost:5000/post/search/${category}/${query}`)
    }

    const returnToSugestedPage = ()=>
    {
        console.log("retornando...")
        setPostsTitle("sugeridos")
        setIsSeaching(false)
    
        getPages(`http://localhost:5000/post/${currentPage}`)
    }


    //executar na primeira inicialização
    useEffect(()=>
    {
        getPages(`http://localhost:5000/post/${currentPage}`)

    }, [])

    return (

        <main className="Posts">
            <SeachBar handleSeach={handleStartSearch}  />
            {
                isLoading ? <Loading/> :
                    <div>
                        <h2>{postsTitle}</h2>
                            <div className="CardsArea">
                                {
                                    data.posts.map(item=>{
                                        return <PostCard
                                            category={item.category}
                                            datetime={new Date(item.addDate).toLocaleString('pt-BR')}
                                            userName={item.userName}
                                            originalAuthor={item.originalAuthor}
                                            title={item.title}
                                            descriptionText={item.descriptionText}
                                            sourceUrl={item.sourceUrl}
                                            _id={item._id}
                                        />
                                    })
                                }
                            </div>

                        {
                            isSearching ? <div id = "returnToStartPage"> <button type="button" onClick={returnToSugestedPage}>voltar</button> </div> :
                                <div className="PagesCount">
                                    <button id="previousPage" type="button" onClick={decrementPageCount}>
                                        <FaChevronLeft id="PrevNextIcons"/>
                                    </button>
                                    <span>Página</span>
                                    <span id="currentPage" > { currentPage } </span>
                                    <span> de </span>
                                    <span id="totalPage"> {data.numberOfPages} </span>
                                    <button id="nextPage" type="button" onClick={incrementPageCount}>
                                        <FaChevronRight id="PrevNextIcons"/>
                                    </button>
                                </div>
                        }

                    </div>
            }

        </main>
    )
}