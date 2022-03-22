import { Filter } from '../Filter';
import './style.css';

import {FaSistrix} from 'react-icons/fa'
import { useState } from 'react';


export function SearchBar()
{
    const [searchInput, setSearchInput] = useState("");

    return(
        
        <div className="SearchBar">
            <form>
                <Filter/>
                <div className='search'>
                    <input type="text" maxLength="30" name='search_input' value={searchInput} placeholder='Digite para pesquisar' onChange={e=>setSearchInput(e.target.value)} />
                    <button name='sendSearchText'> 
                        <FaSistrix id='search_icon'/>
                    </button>
                </div>
            </form>
        </div>
    )
}
