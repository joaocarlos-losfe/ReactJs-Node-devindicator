import { Filter } from '../Filter';
import './style.css';

import {FaSistrix} from 'react-icons/fa'

export function SearchBar()
{
    return(
        
        <div className="SearchBar">
            <form>
                <Filter/>
                <div className='search'>
                    <input placeholder='Digite para pesquisar' />
                    <button>
                        <FaSistrix id='search_icon'/>
                    </button>
                </div>
            </form>
        </div>
    )
}