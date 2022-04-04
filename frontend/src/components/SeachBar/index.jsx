import "./style.css";
import {FiSearch} from "react-icons/fi"
import {useFetch} from "../../hooks/HttpRequests";
import {Loading} from "../Loading";
import {useState} from "react";

export const SeachBar = ({handleSeach}) =>{

    const {data, isLoading} = useFetch(`http://localhost:5000/resources/categories`)

    const [category, setCategory] = useState('nenhum')
    const [query, setQuery] = useState("")

    function startSearch(){
        handleSeach({category, query})
    }

    return (
        <>
            {
                isLoading ? <Loading/> :
                    <form className="SearchForm">
                        <label>
                            filtro
                            <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                                {data.categories.map((item)=>{return <option key={item}>{item}</option>} )}
                            </select>
                        </label>

                        <div className="SeachInput">
                            <input value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder="Digite para pesquisar"/>
                            <button type="button" onClick={startSearch}>
                                <FiSearch id="seachIcon"/>
                            </button>
                        </div>
                    </form>
            }
        </>
    )
}