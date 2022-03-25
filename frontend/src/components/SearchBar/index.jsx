import { useState } from 'react';
import {FaSistrix} from 'react-icons/fa'
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading";
import './style.css';

export function SearchBar( { onSubmit } )
{
    const {data, isLoading} = useFetch("data-resouces/categories");

    const [searchValue, setSeachValue] = useState("");
    const [filterValue, setFilterValue] = useState("todos");
 
    return(
        
        <div className="SearchBar">
            <form> 
                <div className="Filter">
                    {isLoading ? <Loading/> : 
                        <label>
                            filtro
                            <select className="Filters" value={filterValue} onChange={e => setFilterValue(e.target.value)}>
                            {
                                data.categories.map((item) =>
                                {
                                    return <option key={item}>{item}</option>  
                                })
                            }
                            </select>
                        </label>
                    }
                </div>

                <div className='search'>
                    <input 
                        type="text" 
                        maxLength="30" 
                        name='search_input' 
                        id="search_input"
                        value={ searchValue }
                        placeholder='Digite para pesquisar' 
                        onChange={ e => setSeachValue(e.target.value)}
                    />

                    <button type='button' onClick={ () => onSubmit({searchValue, filterValue})}> 
                        <FaSistrix id='search_icon'/>
                    </button>
                </div>
            </form>
        </div>
    )
}
